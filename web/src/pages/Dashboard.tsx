import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CoursesContainer } from "../components/Courses/CoursesContainer";
import { NavBar } from "../components/Navbar/Index";
import { Widget } from "../components/Widget";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <CoursesContainer />
      <Widget />
    </>
  );
};
