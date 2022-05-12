import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alerts/Alert";
import { StoreContext } from "../store/Context";
import LogoImg from "../assets/nlw.svg";
import { Input } from "../components/formComponents/Input";
import { SubmitButton } from "../components/formComponents/SubmitButton";

const initialState = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { handleLogin } = useContext(StoreContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
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
            onSubmit={async (event) => {
              event.preventDefault();
              setIsLoading(true);
              await handleLogin(values);
              setIsLoading(false);
            }}
          >
            <Input
              placeholder="E-mail"
              onChange={(event) => handleChange(event, "email")}
              value={values.email}
            />
            <Input
              placeholder="Password"
              onChange={(event) => handleChange(event, "password")}
              value={values.password}
              type="password"
            />
            <SubmitButton text="Entrar" loading={false} />
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-100">
            {" "}
            Ainda não tem uma conta?{" "}
            <Link
              to="/signup"
              className="font-medium text-purple-600 hover:underline ml-2"
            >
              Cadastrar
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
