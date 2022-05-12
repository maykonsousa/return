import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/Navbar/Index";
import { RequestsContainer } from "../components/Requests/RequestsContainer";
import { Widget } from "../components/Widget";

export const Requests = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <RequestsContainer />
      <Widget />
    </>
  );
};
