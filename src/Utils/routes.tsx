import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/ErrorPages/404";
import BreadcrumbTest from "../Components/Common/Breadcrumbs";
import Testimonial from "../Components/Common/Cards/Testimonial";
import TestimonialCarousel from "../Components/Common/Carousel/TestimonialCarousel";

//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default router;
