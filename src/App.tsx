import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Components/Common/Footer";

// only add provider wrappers here

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
          <div className="h-screen"></div>
          <Footer/>
      </QueryClientProvider>
    </>
  );
}

export default App;