import Globe from "../Globe/Globe";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import GradualSpacing from "../GradualSpacing/GradualSpacing";
import TextRevealByWord from "../TextRevealByWord/TextRevealByWord";
import { OrbitingPlaces } from "../OrbitingPlaces/OrbitingPlaces";
import "./Home.css"
const Home = () => {
  return (
 
      <div>
        <img
          className="indigo-logo"
          src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"
          aria-label="Indigo Logo Image"
          alt="IndiGo Logo"
          loading="lazy"
        />

        <h1 className="text-5xl font-bold welcome-msg">
          Welcome to the <span className="text-green-600">IndiGo</span> Flight
          Tracker!
        </h1>
        {/* <Globe className="globe" /> */}
        {/* <div className="z-10 flex items-center justify-center rounded-lg border text-black bg-white">
        <TextRevealByWord text="Track Your Flights Like Never Before!"/>
    </div> */}

    <OrbitingPlaces/>

      </div>
 
  );
};

export default Home;
