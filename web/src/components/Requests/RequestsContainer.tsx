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
      <div className="flex gap-8 mt-48 flex-wrap items-center justify-center">
        {requests.map((request) => (
          <CardRequests key={request.id} request={request} />
        ))}
      </div>
    </>
  );
};
