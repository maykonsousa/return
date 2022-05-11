import React, { useContext } from "react";
import { StoreContext } from "../../store/Context";
import { DefaultAlert } from "./DefaultAlert";
import { ErrorAlert } from "./ErrorAlert";
import { InfoAlert } from "./InfoAlert";
import { SuccsessAlert } from "./SuccessAlert";
import { WarningAlert } from "./WarningAlert";

export const Alert = () => {
  const { alertData, showAlert } = useContext(StoreContext);

  if (!showAlert) return null;
  switch (alertData.type) {
    case "default":
      return <DefaultAlert message={alertData.message} />;
    case "error":
      return <ErrorAlert message={alertData.message} />;
    case "info":
      return <InfoAlert message={alertData.message} />;
    case "success":
      return <SuccsessAlert message={alertData.message} />;
    case "warning":
      return <WarningAlert message={alertData.message} />;
  }
  return null;
};
