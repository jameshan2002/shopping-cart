import Fade from "react-reveal/Fade";
import images from "../img/group-photo.jpg";

function Home() {
  return (
    <div className="flex content-center items-center justify-center w-3/4 mx-auto mt-14 sm:mt-40 flex-wrap sm:flex-nowrap ">
      <Fade cascade>
        <div className="lg:mr-24 mx-auto">
          <h3 className="text-4xl sm:text-7xl p-4 font-semibold">
            Find your way.
          </h3>
          <p className="text-3xl p-4 font-light">
            Search your favorites on this store.
          </p>
        </div>
        <img src={images} alt="" className="W-5/6 sm:w-3/6 p-4 rounded-3xl" />
      </Fade>
    </div>
  );
}

export default Home;
