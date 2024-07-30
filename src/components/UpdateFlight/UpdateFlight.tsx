import { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  NumberInput,
  Center,
  Select,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import axios from "axios";
import { SERVER_ENDPOINT } from "../../constants/api";

const UpdateFlight = () => {
  const [flightId, setFlightId] = useState("");
  const [flightDetails, setFlightDetails] = useState(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${SERVER_ENDPOINT}/admin/flights/6E ${flightId}`
      );
      setFlightDetails(response.data);
      setShowEditor(true);
    } catch (error) {
      console.error("Error fetching flight details:", error);
      alert("Error fetching flight details.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(flightDetails);
    if (flightDetails) {
      try {
        const response = await axios.put(
          `${SERVER_ENDPOINT}/admin/flights/${flightDetails._id}`,
          flightDetails
        );
        console.log("Flight updated successfully:", response.data);
        alert("Flight updated successfully!");
      } catch (error) {
        console.error("Error updating flight:", error);
        alert("Error updating flight or sending notification");
      }
    }
  };

  const handleChange = (name, value) => {
    setFlightDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Update Flight</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={showEditor ? handleUpdate : handleSearch}>
          {!showEditor && (
            <>
              <NumberInput
                label="Flight Id"
                leftSection={flightIdPrefix}
                placeholder="e.g. 1001"
                value={flightId}
                onChange={(value) => setFlightId(value)}
                hideControls
                allowDecimal={false}
                allowNegative={false}
                allowLeadingZeros={false}
                clampBehavior="none"
                required
              />
              <Center>
                <Button mt="xl" type="submit">
                  Search
                </Button>
              </Center>
            </>
          )}
          {showEditor && flightDetails && (
            <>
              <TextInput
                label="Flight Id"
                value={flightDetails.flight_id}
                readOnly
                disabled
              />
              <TextInput
                label="Airline"
                value={flightDetails.airline}
                readOnly
                disabled
              />
              <TextInput
                label="From"
                value={flightDetails.from}
                readOnly
                disabled
              />
              <TextInput
                label="To"
                value={flightDetails.to}
                readOnly
                disabled
              />
              <DateTimePicker
                label="Scheduled Departure"
                value={new Date(flightDetails.scheduled_departure)}
                onChange={(date) =>
                  handleChange("scheduled_departure", date.toISOString())
                }
                required
              />
              <DateTimePicker
                label="Scheduled Arrival"
                value={new Date(flightDetails.scheduled_arrival)}
                onChange={(date) =>
                  handleChange("scheduled_arrival", date.toISOString())
                }
                minDate={new Date(flightDetails.scheduled_departure)}
                required
              />
              <DateTimePicker
                label="Actual Departure"
                value={
                  flightDetails.actual_departure
                    ? new Date(flightDetails.actual_departure)
                    : null
                }
                onChange={(date) =>
                  handleChange("actual_departure", date.toISOString())
                }
              />
              <DateTimePicker
                label="Actual Arrival"
                value={
                  flightDetails.actual_arrival
                    ? new Date(flightDetails.actual_arrival)
                    : null
                }
                onChange={(date) =>
                  handleChange("actual_arrival", date.toISOString())
                }
                minDate={
                  flightDetails.actual_departure
                    ? new Date(flightDetails.actual_departure)
                    : new Date(flightDetails.scheduled_departure)
                }
              />
              <Select
                required
                label="Status"
                value={flightDetails.status}
                onChange={(value) => handleChange("status", value)}
                data={[
                  { value: "Arrived", label: "Arrived" },
                  { value: "Delayed", label: "Delayed" },
                  { value: "Cancelled", label: "Cancelled" },
                  { value: "Early", label: "Early" },
                ]}
              />
              <TextInput
                required
                label="Departure Gate"
                name="departure_gate"
                value={flightDetails.departure_gate}
                onChange={(e) => handleChange("departure_gate", e.target.value)}
              />
              <TextInput
                required
                label="Arrival Gate"
                name="arrival_gate"
                value={flightDetails.arrival_gate}
                onChange={(e) => handleChange("arrival_gate", e.target.value)}
              />
              <Center>
                <Button mt="xl" type="submit">
                  Update
                </Button>
              </Center>
            </>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateFlight;

const flightIdPrefix = <p className="text-lg font-bold text-black">6E</p>;
