import { createContext, useState } from "react";

type IContextProps = {
  children: React.ReactNode;
};

type IGithubUser = {
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
  coment: string;
  screenshot: string;
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

  const handleAlert = ({ type = "default", message }: IAlertProps) => {
    setAlertData({ type, message });
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
