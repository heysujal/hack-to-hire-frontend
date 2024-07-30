import "@mantine/core/styles.css";
import TextRevealByWord from "../TextRevealByWord/TextRevealByWord";
import { OrbitingPlaces } from "../OrbitingPlaces/OrbitingPlaces";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold welcome-msg">
        Welcome to the <span className="text-green-600">IndiGo</span> Flight
        Tracker!
      </h1>
      <OrbitingPlaces />
      <div className="font-[IndiGoFont] flex items-center justify-center">
        <TextRevealByWord text="Track Your Flights ✈️,   Like Never Before! 😎" />
      </div>
      <div className="font-[IndiGoFont] flex items-center justify-center">
        <TextRevealByWord text="Fast ⚡ Updated 💯 Reliable 💪 Free 💖" />
      </div>

      <div className="btn-container text-center">
        <Link to={"tracker"}>
          <button className="w-60 mb-36 bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-4 px-8 rounded-full">
            Search Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
