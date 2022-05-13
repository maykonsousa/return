import React from "react";

interface IVideoProps {
  video: {
    id: string;
    title: string;
  };
}

export const ClassModal = ({ video }: IVideoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="absolute bottom-2 left-2">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brand-300 rounded-lg hover:bg-brand-500  "
        >
          ver aula
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div className="overflow-y-auto overflow-x-hidden bg-zinc-900/25  items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full m-auto max-w-7xl mt-36 h-auto">
            <div className="relative  rounded-lg m-auto  shadow bg-gray-700">
              <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white"></h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6 m-4 border-2 border-brand-500 h-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
              {/*footer */}
              <div className="flex items-center font-bold p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="w-auto px-5 py-2.5 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
