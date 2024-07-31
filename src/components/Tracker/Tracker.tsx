import { Text, Title, Transition } from "@mantine/core";
import FlightDetailInput from "../FlightDetailInput/FlightDetailInput";
import FlightAccordion from "../FlightAccordion/FlightAccordion";
import { Notification } from '@mantine/core';
import { useFlightStore } from "../../store/store";
import { SERVER_URL } from "../../constants/api";
import { useEffect, useState } from "react";
import socket from '../../socket'

const Tracker = () => {
  const { subscribedFlights, updateFlight } = useFlightStore();
  const [notificationDetails, setNotificationDetails] = useState(null);
  console.log(subscribedFlights)
  useEffect(() => {
    socket.on("flightDetailsUpdate", (updatedFlight) => {
      console.log(updatedFlight);
      if (subscribedFlights.has(updatedFlight.flight_id)) {
        setNotificationDetails(updatedFlight);
        updateFlight(updatedFlight);
      }
    });


    return () => {
      socket.off("flightDetailsUpdate");
    };
  }, [subscribedFlights, updateFlight]);


  useEffect(() => {

    console.log(notificationDetails)
    let timerId;
    if(notificationDetails){
      timerId = setTimeout(() => {
        setNotificationDetails(null)
      }, 7000)
    }

      return ()=>clearTimeout(timerId)
  }, [notificationDetails] );

  return (
    <div>
{ notificationDetails && <Notification className="absolute right-3" w={300} title={`Update on Flight ${notificationDetails?.flight_id}`} withCloseButton={false} withBorder={true}>
 
        Airline: {notificationDetails?.airline} 
        <br />
        Status: {notificationDetails?.status}
        <br />
        From: {notificationDetails?.from}
        <br />
        To: {notificationDetails?.to}
        <br />
        Scheduled Departure: {new Date(notificationDetails?.scheduled_departure).toUTCString()}
        <br />
        Scheduled Arrival: {new Date(notificationDetails?.scheduled_arrival).toUTCString()}
        <br />
        Actual Departure: {notificationDetails?.actual_departure ? new Date(notificationDetails?.actual_departure).toUTCString() : 'N/A'}
        <br />
        Actual Arrival: {notificationDetails?.actual_arrival ? new Date(notificationDetails?.actual_arrival).toUTCString() : 'N/A'}
        <br />
        Departure Gate: {notificationDetails?.departure_gate}
        <br />
        Arrival Gate: {notificationDetails?.arrival_gate}
        <br />
  
    </Notification>}
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

      <FlightDetailInput />

      <div className="w-6/12 p-2 mx-auto">
        <Title order={3}>Results</Title>
        <FlightAccordion />
      </div>
    </div>
  );
};

export default Tracker;
