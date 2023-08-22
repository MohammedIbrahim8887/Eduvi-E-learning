import AdsCard from "../Components/Course/AdsCard";
import vite from '../../public/vite.svg';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <AdsCard image={vite} adName="Vite Ad" />
    </>
  );
};

export default Home;
