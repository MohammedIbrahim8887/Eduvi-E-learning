import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Components/Common/Footer";
import SubscriptionBox from "./Components/Common/SubscriptionBox";

// only add provider wrappers here

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
          <div className="h-screen"></div>
          <SubscriptionBox/>
          {/* <Footer/> */}
      </QueryClientProvider>
    </>
  );
}

export default App;