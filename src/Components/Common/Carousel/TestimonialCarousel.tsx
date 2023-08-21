import Testimonial from "../Cards/Testimonial";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./pagination.css";

const TestimonialCarousel = () => {
  return (
    <div className="w-1/2 m-auto">
      <p className="text-3xl font-semibold text-center py-8">
        What do our internees say?
      </p>
      <Splide
        options={{
          type: "loop",
          gap: "1rem",
          arrows: false,
          classes: {
            pagination: "custom-pagination",
          },
          autoplay: {
            enabled: true,
            pauseOnHover: true,
          },
        }}
      >
        <SplideSlide>
          <Testimonial />
        </SplideSlide>
        <SplideSlide>
          <Testimonial />
        </SplideSlide>
        <SplideSlide>
          <Testimonial />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default TestimonialCarousel;
