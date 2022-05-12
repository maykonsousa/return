import { CardCourses } from "./CardCouses";
import { videos } from "./videoMock";
import { Alert } from "../Alerts/Alert";

export const CoursesContainer = () => {
  return (
    <>
      <Alert />
      <div className="flex gap-8 mt-48 flex-wrap items-center justify-center">
        {videos.map((video) => (
          <CardCourses key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};
