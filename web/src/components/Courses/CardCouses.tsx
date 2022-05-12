import React from "react";

interface IVideoProps {
  video: {
    id: string;
    title: string;
  };
}

export const CardCourses = ({ video }: IVideoProps) => {
  return (
    <div className=" relative max-w-sm h-[420px] bg-zinc-800 rounded-lg border border-brand-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-60 w-full"
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
          {video.title}
        </h5>

        <div className="absolute bottom-2 left-2">
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  );
};
