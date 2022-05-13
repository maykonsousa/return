import { Pencil, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import NoImg from "../../assets/noIMG.jpg";
import { StoreContext } from "../../store/Context";

interface IRequestsProps {
  request: {
    id: string;
    userId: string;
    comment: string;
    screenshot: string | null;
    type: "BUG" | "IDEA" | "OTHER";
  };
}

const translate = {
  BUG: "Problema",
  IDEA: "Ideia",
  OTHER: "Outro",
};

export const CardRequests = ({ request }: IRequestsProps) => {
  const { handleDeleteRequest, handleAlert } = useContext(StoreContext);
  const [action, setAction] = useState<"edit" | "delete" | "">("");

  return (
    <div className=" relative max-w-sm h-[420px] w-[420px] bg-zinc-800 rounded-lg border border-brand-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-60 w-full"
        src={request.screenshot ? request.screenshot : NoImg}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-100 dark:text-white">
          {translate[request.type]}
        </h5>

        <p>{request.comment}</p>

        <div className="absolute bottom-2 left-2 flex gap-2">
          <button
            onClick={() => handleDeleteRequest(request.id)}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-500  "
          >
            Remover
            <Trash className="ml-2 -mr-1 w-4 h-4" fill="currentColor" />
          </button>
          <button
            onClick={() =>
              handleAlert({
                type: "info",
                message: "feature ainda não implementada!",
              })
            }
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-brand-500  "
          >
            Alterar
            <Pencil className="ml-2 -mr-1 w-4 h-4" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};
