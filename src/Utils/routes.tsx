import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home";
import Error404 from "../Pages/ErrorPages/404";
import SubscriptionBox from "../Components/Common/SubscriptionBox";

//Add your routes here

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <SubscriptionBox />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default router;
