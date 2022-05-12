import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/formComponents/Input";
import { SearchButton } from "../components/formComponents/SeachButton";
import { IGithubUser, StoreContext } from "../store/Context";
import { SubmitButton } from "../components/formComponents/SubmitButton";
import { CreateuserService } from "../services/CreateuserService";
import LogoImg from "../assets/nlw.svg";
import { Alert } from "../components/Alerts/Alert";
import { getGithubData } from "../services/GetGithubUserData";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setGithubUser, githubUser, handleAlert } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (githubUser) {
      setGithubUser({} as IGithubUser);
    }
  }, [githubUser]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleGetGithubUser = async (username: string) => {
    setIsLoading(true);
    const { data, message, type } = await getGithubData(username);
    setIsLoading(false);
    handleAlert({
      type,
      message,
    });
    setGithubUser(data);
  };

  useEffect(() => {
    if (githubUser) {
      setValues({
        ...values,
        name: githubUser.name,
        username: githubUser.login,
      });
    }
  }, [githubUser]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="absolute top-20 m-auto right-4 w-full sm:w-[calc(40vw)]  ">
        <Alert />
      </div>
      <div className="w-full p-6 m-auto bg-zinc-900 border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
        <div className=" flex justify-center">
          <img src={LogoImg} alt="" />
        </div>

        <form
          className="mt-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const { message, status } = await CreateuserService(values);
            handleAlert({
              type: status === "success" ? status : "error",
              message,
            });

            setIsLoading(false);
            setValues(initialState);
            if (status === "success") {
              setTimeout(() => {
                navigate("/");
              }, 2000);
            }
          }}
        >
          <div className="flex gap-2 items-center justify-end ">
            <Input
              placeholder="Usuário Gitub"
              onChange={(e) => setUsername(e.target.value)}
            />
            <SearchButton
              className="mt-4"
              onClick={() => handleGetGithubUser(username)}
              loading={isLoading}
              disabled={!username}
              type="button"
            />
          </div>

          {githubUser?.name && (
            <>
              <Input
                placeholder="Nome Completo"
                onChange={(e) => setUsername(e.target.value)}
                value={githubUser?.name}
                disabled={!!githubUser?.name}
              />
              <Input
                placeholder="E-mail"
                onChange={(e) => handleChange(e, "email")}
                value={githubUser?.email ? githubUser?.email : values.email}
                disabled={!!githubUser?.email}
              />
              <Input
                placeholder="Senha"
                onChange={(e) => handleChange(e, "password")}
                value={values.password}
                type="password"
              />
              <Input
                placeholder="Confirmar Senha"
                onChange={(e) => handleChange(e, "confirmPassword")}
                value={values.confirmPassword}
                type="password"
              />
              <SubmitButton
                text="Cadastrar"
                type="submit"
                loading={isLoading}
              />
            </>
          )}
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-100">
          Já possui conta?
          <Link
            to="/"
            className="font-medium text-purple-600 hover:underline ml-2"
          >
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
};
