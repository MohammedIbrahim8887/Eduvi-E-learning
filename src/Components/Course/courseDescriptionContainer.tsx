import BreadcrumbTest from "../Common/Breadcrumbs";
import CoursePlaylists from "../Common/coursePlaylists";
import VideoPlayer from "../Common/videoPlayer";

const CourseDescriptionContainer = () => {
  return (
    <div className=" max-h-[640px] w-full p-6 grid grid-cols-10 bg-[#EFEBF5]  gap-4 rounded-3xl top-32 relative">
      <div className=" col-span-10 row-start-1 h-[2px]">
        <BreadcrumbTest />
      </div>
      <div className=" col-span-10 row-span-5  bg-red-200">
        <VideoPlayer />
      </div>
      <div className=" row-span-6 row-start-1 ">
        <CoursePlaylists />
      </div>
    </div>
  );
};

export default CourseDescriptionContainer;
