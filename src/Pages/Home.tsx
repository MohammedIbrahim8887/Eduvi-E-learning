import CourseDetailsContainer from "./CourseDetailsContainer";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello World!</h1> */}
      <CourseDetailsContainer />
    </>
  );
};

export default Home;
