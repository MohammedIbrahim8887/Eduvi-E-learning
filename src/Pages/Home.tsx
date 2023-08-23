import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";
import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';
import BreadcrumbTest from "../Components/Common/Breadcrumbs";
import CourseVideoSectionCard from "../Components/Common/Cards/CourseVideoSectionCard";


const Home = () => {
  return (
    <>
    <div className="ml-5">
    <BreadcrumbTest />
    </div>
    <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen">
      {/* add other homepage components here */}
      <AdsCard image={vite} adName="Vite Ad" /> {/*move this component to course detail page*/}
      <TestimonialCarousel />
      <CourseVideoSectionCard image={vite} adName="all" cardName="Maths - for Standard 3 St.." duration="5:30" />
    </div>
    </>
  );
};

export default Home;
