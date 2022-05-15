import { Check, Pencil, Trash, XCircle } from "phosphor-react";
import { useContext, useState } from "react";
import NoImg from "../../assets/noIMG.jpg";
import { StoreContext } from "../../store/Context";

interface IRequestsProps {
  request: {
    id: string;
    userId: string;
    message: string;
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
    <div className=" relative max-w-sm h-full w-[420px] bg-zinc-800 rounded-lg border border-brand-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-60 w-full"
        src={request.screenshot ? request.screenshot : NoImg}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-100 dark:text-white">
          {translate[request.type]}
        </h5>

        <div className="h-[120px] mb-8 overflow-y-auto ">
          <p className="text-sm">{request.message}</p>
        </div>

        <div className="absolute bottom-2 left-5">
          {action === "delete" ? (
            <>
              <span className="block font-black mb-2">Confirma Exclusão?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDeleteRequest(request.id)}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 transiction-color duration-200 rounded-lg hover:bg-green-400  "
                >
                  Sim
                  <Check className="ml-2 -mr-1 w-4 h-4" fill="currentColor" />
                </button>
                <button
                  onClick={() => setAction("")}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-zinc-700 transiction-color duration-200 rounded-lg hover:bg-zinc-500  "
                >
                  Não
                  <XCircle className="ml-2 -mr-1 w-4 h-4" fill="currentColor" />
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setAction("delete")}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 transiction-color duration-200"
            >
              Remover
              <Trash className="ml-2 -mr-1 w-4 h-4" fill="currentColor" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
