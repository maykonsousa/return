import { useContext } from "react";
import { StoreContext } from "../../store/Context";
import { Alert } from "../Alerts/Alert";
import { CardRequests } from "./CardRequests";

export const RequestsContainer = () => {
  const { requests } = useContext(StoreContext);
  return (
    <>
      <div className="absolute top-20 m-auto right-4 w-full sm:w-[calc(40vw)]  ">
        <Alert />
      </div>
      <div className="m-auto px-[120px] mt-48 w-content">
        <div className="flex gap-8 flex-wrap items-center justify-start">
          {requests.length === 0 ? (
            <p className="block  text-sm sm:text-2xl text-center w-full">
              Não existem solicitações abertas. Para incluir uma nova
              solicitação, utilize o widget no canto inferior de qualquer área
              do site
            </p>
          ) : (
            requests.map((request) => <CardRequests request={request} />)
          )}
        </div>
      </div>
    </>
  );
};
