import OrbitingCircles from "../OrbitingCircles/OrbitingCircles";
import { SiIndigo } from "react-icons/si";
import tajMahal from "../../assets/taj-mahal.png";
import gateWayOfIndia from "../../assets/gateway-of-india.png";
import eiffelTower from "../../assets/eiffel-tower.png";
import statueOfLiberty from "../../assets/statue-of-liberty.png";
import brazilChrist from "../../assets/brazil.png";
import chinaTemple from "../../assets/china.png";
import londonBridge from "../../assets/london-bridge.png";
import burjKhalifa from "../../assets/burj-khalifa.png";
import statueOfUnity from "../../assets/statue-of-unity.png";

export function OrbitingPlaces() {
  return (
    <div className="border-none relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        <SiIndigo size={50} className="text-blue-900" />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-5 bg-transparent"
        duration={15}
        radius={90}
      >
        <Icons.tajmahal />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-5 bg-transparent"
        duration={15}
        delay={20}
        radius={90}
      >
        <Icons.gatewayofindia />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-4 bg-transparent"
        duration={15}
        delay={30}
        radius={90}
      >
        <Icons.chinatemple />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-4 bg-transparent"
        duration={30}
        delay={10000}
        radius={180}
        reverse
      >
        <Icons.eiffeltower />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-4 bg-transparent"
        duration={30}
        delay={20000}
        radius={180}
        reverse
      >
        <Icons.londonbridge />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-4 bg-transparent"
        duration={30}
        delay={30000}
        radius={180}
        reverse
      >
        <Icons.burjkhalifa />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-5 bg-transparent"
        duration={30}
        delay={10000}
        radius={250}
      >
        <Icons.brazilchrist />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-5 bg-transparent"
        duration={30}
        delay={20000}
        radius={250}
      >
        <Icons.statueofunity />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-5 bg-transparent"
        duration={30}
        delay={30000}
        radius={250}
      >
        <Icons.statueofliberty />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  tajmahal: () => <img src={tajMahal} title="Taj Mahal" />,
  gatewayofindia: () => <img src={gateWayOfIndia} title="Gateway of India" />,
  chinatemple: () => <img src={chinaTemple} title="China Temple" />,
  eiffeltower: () => <img src={eiffelTower} title="Eiffel Tower" />,
  londonbridge: () => <img title="London Bridge" src={londonBridge} />,
  burjkhalifa: () => <img title="Burj Khalifa" src={burjKhalifa} />,
  brazilchrist: () => <img title="Brazil Christ" src={brazilChrist} />,
  statueofunity: () => <img title="Statue Of Unity" src={statueOfUnity} />,
  statueofliberty: () => (
    <img title="Statue of Liberty" src={statueOfLiberty} />
  ),
};
