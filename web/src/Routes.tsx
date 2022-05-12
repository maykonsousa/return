import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Requests } from "./pages/Requests";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { StoreProvider } from "./store/Context";

export const Router = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
};
