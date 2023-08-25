import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";
import AdsCard from "../Components/Course/AdsCard";
import vite from '../assets/images/kfc_add.webp';
import BreadcrumbTest from "../Components/Common/Breadcrumbs";
import CourseDescriptionContainer from "../Components/Course/courseDescriptionContainer";


const Home = () => {
  return (
    <>
    <div className="ml-5">
    <BreadcrumbTest />
    </div>
    <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen">
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      {/* add other homepage components here */}
      <TestimonialCarousel />
      <CourseDescriptionContainer />
    </div>
    </>
  );
};

export default Home;
