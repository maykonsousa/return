import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { LoginUserService } from "../services/LoginUserService";
import { useNavigate } from "react-router-dom";
import { getGithubData } from "../services/GetGithubUserData";
import { GetRequestsService } from "../services/getRequestsService";
import { DeleteRequestService } from "../services/DeleteRequestService";
import { CreateRequestService } from "../services/CreateRequestService";

type IContextProps = {
  children: React.ReactNode;
};

type ILoginProps = {
  email: string;
  password: string;
};

export type IGithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null | string;
  hireable: null | boolean;
  bio: string;
  twitter_username: null | string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

type ISentRequestDataProps = {
  type: string;
  message: string;
  screenshot: string | null;
};

type IAlertProps = {
  message?: string;
  type: "success" | "warning" | "error" | "info" | "default" | string;
};

type IUserProps = {
  id: string;
  name: string;
  email: string;
  username: string;
};

type IRequestsProps = {
  id: string;
  userId: string;
  message: string;
  screenshot: string;
  type: "BUG" | "IDEA" | "OTHER";
};

type IContextTypes = {
  user: IUserProps;
  githubUser: IGithubUser;
  requests: IRequestsProps[];
  refreshList: boolean;
  token: string;
  enableAlert: boolean;
  showAlert: boolean;
  alertData: IAlertProps;
  setToken: (newToken: string) => void;
  setUser: (newUser: IUserProps) => void;
  setEnableAlert: (newEnableAlert: boolean) => void;
  setRequests: (newRequests: IRequestsProps[]) => void;
  setRefreshList: (newRefreshList: boolean) => void;
  setGithubUser: (newGithubUser: IGithubUser) => void;
  handleAlert: (data: IAlertProps) => void;
  handleLogin: (data: ILoginProps) => Promise<void>;
  handleLogout: () => void;
  handleDeleteRequest: (id: string) => Promise<void>;
  handleSentRequest: (data: ISentRequestDataProps) => Promise<void>;
};

const initialValues = {
  user: {} as IUserProps,
  githubUser: {} as IGithubUser,
  requests: [] as IRequestsProps[],
  refreshList: false,
  token: "",
  enableAlert: false,
  showAlert: true,
  alertData: {} as IAlertProps,

  setRequests: () => [] as IRequestsProps[],
  setToken: () => "",
  setUser: () => {},
  setRefreshList: () => {},
  setGithubUser: () => {},
  setEnableAlert: () => {},
  handleAlert: () => {},
  handleLogin: () => Promise.resolve(),
  handleLogout: () => {},
  handleDeleteRequest: () => Promise.resolve(),
  handleSentRequest: () => Promise.resolve(),
};

export const StoreContext = createContext<IContextTypes>(initialValues);

export const StoreProvider = ({ children }: IContextProps) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [githubUser, setGithubUser] = useState<IGithubUser>({} as IGithubUser);
  const [requests, setRequests] = useState<IRequestsProps[]>([]);
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [enableAlert, setEnableAlert] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [alertData, setAlertData] = useState<IAlertProps>({} as IAlertProps);
  const navigate = useNavigate();

  const getRequests = async () => {
    const response = await GetRequestsService();
    if (response.type === "success") {
      setRequests(response.data);
    }
  };

  const getGithubUser = async (username: string) => {
    if (user) {
      const { data } = await getGithubData(username);
      setGithubUser(data);
    }
  };

  const handleLogin = async ({ email, password }: ILoginProps) => {
    const response = await LoginUserService({ email, password });
    const { data, type, message } = response;
    if (type === "success") {
      setToken(data.token);
      setUser({ ...user, ...data.user });
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      handleAlert({
        type,
        message,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
    handleAlert({
      type,
      message,
    });
  };

  const handleLogout = () => {
    setToken("");
    setUser({} as IUserProps);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.defaults.headers.common["Authorization"] = "";
    navigate("/");
  };
  const handleAlert = ({ type = "default", message }: IAlertProps) => {
    setAlertData({ type, message });
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleSentRequest = async ({
    type,
    message,
    screenshot,
  }: ISentRequestDataProps) => {
    const response = await CreateRequestService({ type, message, screenshot });
    if (response.type === "success") {
      setRequests([...requests, response.data]);
      handleAlert({
        type: response.type,
        message: response.message,
      });
    }
    handleAlert({
      type: response.type,
      message: response.message,
    });
  };

  const handleDeleteRequest = async (id: string) => {
    const { message, type } = await DeleteRequestService(id);
    if (type === "success") {
      setRequests(requests.filter((request) => request.id !== id));
      handleAlert({
        type,
        message,
      });
      return;
    }
    handleAlert({
      type,
      message,
    });
  };

  useEffect(() => {
    if (token) {
      getRequests();
    }
  }, [user, refreshList, token]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userLoged = token
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};
    if (token) {
      setToken(token);
      setUser(userLoged);
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;
      getGithubUser(userLoged.username);
    }
  }, [token]);

  return (
    <StoreContext.Provider
      value={{
        user,
        githubUser,
        setGithubUser,
        requests,
        refreshList,
        token,
        setToken,
        setUser,
        setRequests,
        setRefreshList,
        enableAlert,
        setEnableAlert,
        handleAlert,
        showAlert,
        alertData,
        handleLogin,
        handleLogout,
        handleDeleteRequest,
        handleSentRequest,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
