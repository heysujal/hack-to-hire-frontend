import { Text, Title, Transition } from "@mantine/core";
import React from "react";
import FlightDetailInput from "../FlightDetailInput/FlightDetailInput";
import DatePicker from "../DatePicker/DatePicker";
import {useFlightStore} from "../../store/store";
import FlightAccordion from "../FlightAccordion/FlightAccordion";
const Tracker = () => {
  const {flightResults} = useFlightStore();
  return (
    <div>
      <Title className="font-[IndiGoFont] my-5 text-center text-6xl">
        IndiGo Flight Tracker
      </Title>

      <Text className="text-center" fw={500}>
        With IndiGo flight tracker you can track the live status of all your
        flights without any login.
      </Text>

      <Text className="text-center">
        Enter details below to check status of flights
      </Text>
      {/* <Title className="font-[IndiGoFont] my-5 text-center text-8xl bg-gradient-to-r from-saffron via-white to-green bg-[length:200%_200%] bg-clip-text text-transparent animate-flow">
  IndiGo Flight Tracker
</Title> */}
 
      <FlightDetailInput />
      

      <Transition
      mounted={true}
      transition="slide-up"
      duration={300}
      timingFunction="ease"
    >
      {(styles) =>     <div style={styles} className="w-6/12 p-2 mx-auto">
        <Title order={3}>Results</Title>

        <FlightAccordion/>

      </div>}
  
    </Transition>

    </div>
  );

};

export default Tracker;
