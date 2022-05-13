import React from "react";
import { ClassModal } from "../modal/ClassModal";

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

        <ClassModal video={video} />
      </div>
    </div>
  );
};
