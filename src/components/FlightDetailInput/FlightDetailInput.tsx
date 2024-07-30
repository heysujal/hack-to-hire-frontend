import { Button, NumberInput, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import { DateInput } from "@mantine/dates";
import axios from 'axios'
import airports from '../../constants/airports.json'
import dayjs from 'dayjs'
import { useSet } from "@mantine/hooks";
import { useFlightStore } from "../../store/store";

const FlightDetailInput = () => {
  const {setFlightResults} = useFlightStore();

  const airportList = airports.map((port)=>{
    return `${port.IATA_code} - ${port.airport_name}, ${port.city_name}`
  })
  const [departureList, setDepartureList] = useState(airportList)
  const [destinationList, setDestinationList] = useState(airportList)
  const [selectedDeparture, setSelectedDeparture] = useState('DEL - Indira Gandhi International Airport, New Delhi');
  const [selectedDestination, setSelectedDestination] = useState("BLR - Bengaluru International Airport, Bangalore");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2024-08-03'));
  const [flightId, setFlightId] = useState<number | undefined>(undefined);


    useEffect(()=>{
        console.log(selectedDeparture)
        const departureOptions = airportList.filter((port)=> port !== selectedDestination)
        const destinationOptions = airportList.filter((port)=>port !== selectedDeparture);
        setDepartureList(departureOptions)
        setDestinationList(destinationOptions)
    },[selectedDeparture, selectedDestination])

    const handleSearch = async (e) => {
        e.preventDefault();
        // Extract the selected values
        const from = selectedDeparture?.split(" - ")[0];
        const to = selectedDestination?.split(" - ")[0];
        const date = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null; // Format to YYYY-MM-DD
        console.log(from , to ,date);
        // Build the query string
        let query = `from=${from}&to=${to}&date=${date}`;
        if (flightId) {
          query += `&flight_id=6E ${flightId}`;
        }
        console.log(query)
        try { 
          const {data} =  await axios.get(`http://localhost:3000/api/flights/search?${query}`);
          console.log(data);
          setFlightResults(data)
        } catch (error) {
          console.log("Error fetching flight data:",error) 
        }
    }
  
  
    return (

    <form onSubmit={handleSearch} className="w-6/12 p-2 mx-auto" action="">
      <div className="place-container my-4 flex justify-between">
        <Select
        w={300}
        checkIconPosition="right"
        required
          size="lg"
          radius="lg"
          label="From"
          placeholder="Pick Departure"
          searchable
          clearable
          value={selectedDeparture}
          onChange={setSelectedDeparture}
          data={departureList}
          nothingFoundMessage="Nothing found..."
        />
        <Select
        w={300}
        required
        checkIconPosition="right"
          size="lg"
          radius="lg"
          label="To"
          placeholder="Pick Arrival"
          searchable
          clearable
          value={selectedDestination}
          onChange={setSelectedDestination}
          data={destinationList}
          nothingFoundMessage="Nothing found..."
        />
      </div>

      <div className="flex justify-between">
      <DateInput
      required
      w={300}
      size='lg'
      radius="lg"
      value={selectedDate}
      valueFormat="YYYY-MM-DD"
      minDate={new Date()}
      onChange={setSelectedDate}
      label="Date input"
      placeholder="Date input"
      clearable
    />
        <NumberInput
        w={300}
      size="lg"
      radius="lg"
      label="Flight Id"
      leftSection={flightIdPrefix}
      placeholder="e.g. 1003"
      value={flightId}
      onChange={setFlightId}
      hideControls
      allowDecimal={false}
      allowNegative={false}
      allowLeadingZeros={false}
      clampBehavior="none"
      
    />
      </div>

      <div className="text-center pt-3">
        <button className="w-60 mt-10 mb-16 bg-indigo-800 hover:bg-indigo-900 focus:ring text-white font-bold py-4 px-8 rounded-full">Go!</button>

      </div>
    </form>
  );
};

export default FlightDetailInput;




const flightIdPrefix = <p className="text-lg font-bold text-black">6E</p>;