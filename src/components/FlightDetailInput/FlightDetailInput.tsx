import { Button, NumberInput, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import { DateInput } from "@mantine/dates";
import airports from '../../constants/airports.json'
import { useSet } from "@mantine/hooks";

const FlightDetailInput = () => {
    const [value, setValue] = useState<Date | null>(null);
    const [flightId, setFlightId] = useState<number | undefined>(undefined);
    const airportList = airports.map((port)=>{
        return `${port.IATA_code} - ${port.airport_name}, ${port.city_name}`
    })
    const [departureList, setDepartureList] = useState(airportList)
    const [destinationList, setDestinationList] = useState(airportList)
    const [selectedDeparture, setSelectedDeparture] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);


    useEffect(()=>{
        console.log(selectedDeparture)
        const departureOptions = airportList.filter((port)=> port !== selectedDestination)
        const destinationOptions = airportList.filter((port)=>port !== selectedDeparture);
        setDepartureList(departureOptions)
        setDestinationList(destinationOptions)
    },[selectedDeparture, selectedDestination])
  
  
    return (

    <form className="w-6/12 p-2 mx-auto" action="">
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
      value={value}
      minDate={new Date()}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
        <NumberInput
        w={300}
      size="lg"
      radius="lg"
      label="Flight Id"
      leftSection={flightIdPrefix}
      placeholder="e.g. 4321"
      value={flightId}
      hideControls
      allowDecimal={false}
      allowNegative={false}
      allowLeadingZeros={false}
      clampBehavior="none"
      
    />
      </div>

      <div className="text-center pt-3">
        <button className="w-60 mt-10 mb-36 bg-indigo-800 hover:bg-indigo-900 focus:ring text-white font-bold py-4 px-8 rounded-full">Go!</button>

      </div>
    </form>
  );
};

export default FlightDetailInput;




const flightIdPrefix = <p className="text-lg font-bold text-black">6E</p>;