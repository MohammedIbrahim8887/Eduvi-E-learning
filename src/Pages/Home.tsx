import { Button } from "@mui/material";
import { useState } from "react";
import AuthModal from "../Components/Modals/AuthModal";
import Nav from "../Components/Common/Nav";
import BreadCrumbs from "../Components/Common/Breadcrumbs";
import ApplyCard from "../Components/Common/Cards/ApplyCard";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Nav />
      <BreadCrumbs />
      <div className="md:p-16 max-md:p-10 flex flex-col justify-center align-center h-screen">
        <Button onClick={handleOpen}>Open Modal</Button>
        <AuthModal onClose={handleClose} open={open} />
      </div>
      <ApplyCard />
    </>
  );
};

export default Home;
