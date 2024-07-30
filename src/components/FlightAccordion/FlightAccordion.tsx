import React, { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Modal,
  Radio,
  Group,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useFlightStore } from "../../store/store";
import indigoPlaneLogo from "../../assets/indigo-plane-logo.png";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/en-gb";
import { BsBell } from "react-icons/bs";
import axios from "axios";

dayjs.extend(duration);

const getStatusColor = (status) => {
  const statusColors = {
    Early: "bg-green-500",
    Delayed: "bg-yellow-500",
    Cancelled: "bg-red-500",
    Arrived: "bg-blue-500",
  };
  return statusColors[status] || "bg-gray-500";
};

const formatTime = (time) => dayjs(time).format("YYYY-MM-DD HH:mm A");

const calculateDuration = (start, end) => {
  const duration = dayjs.duration(dayjs(end).diff(dayjs(start)));
  return `${duration.hours()}h ${duration.minutes()}m`;
};

const FlightAccordion = () => {
  const { flightResults } = useFlightStore();
  const [openedModal, setOpenedModal] = useState(false);
  const [selectedNotificationMethod, setSelectedNotificationMethod] =
    useState("email");
  const [contactInfo, setContactInfo] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [error, setError] = useState(null);

  const handleModalClose = () => {
    setOpenedModal(false);
    setContactInfo("");
    setError(null);
  };

  const handleNotificationSubmit = async (event) => {
    event.preventDefault();
    if (!contactInfo) {
      setError("Please enter your contact information.");
      return;
    }

    const details = {
      contactInfo,
      notificationMethod: selectedNotificationMethod,
    };

    try {
      console.log(contactInfo, details);
      const { data } = await axios.post(
        `http://localhost:3000/api/subscriptions/${selectedFlight}/subscribe`,
        details
      );
      console.log(data);
      if (data) {
        alert("Subscription successful");
        handleModalClose();
      } else {
        setError(data.message || "Subscription failed");
      }
    } catch (err) {
      console.log(err);
      setError(
        `Subscription error: ${
          err?.response?.data?.message ?? err?.message ?? "Unknown"
        }`
      );
    }
  };

  const items = flightResults?.map((item) => {
    const journeyDuration = calculateDuration(
      item.scheduled_departure,
      item.scheduled_arrival
    );

    const handleNotificationClick = (flightId) => {
      setSelectedFlight(flightId);
      setOpenedModal(true);
    };

    return (
      <Accordion.Item
        key={item.flight_id}
        value={item.flight_id}
        className="pt-2"
      >
        <Accordion.Control
          icon={
            <img src={indigoPlaneLogo} alt="Indigo Logo" className="w-8 h-8" />
          }
        >
          <div className="flex items-center space-x-2">
            <span>{item.flight_id}</span>
            <Badge className={`${getStatusColor(item.status)} text-white`}>
              {item.status}
            </Badge>
          </div>
        </Accordion.Control>
        <Accordion.Panel>
          <div className="flex flex-col space-y-2">
            <div>
              <strong>From:</strong> {item.from} (Gate: {item.departure_gate})
            </div>
            <div>
              <strong>To:</strong> {item.to} (Gate: {item.arrival_gate})
            </div>
            <div>
              <strong>Scheduled Departure:</strong>
              {item.actual_departure ? (
                <s>{formatTime(item.scheduled_departure)}</s>
              ) : (
                formatTime(item.scheduled_departure)
              )}
              {item.actual_departure && (
                <span className="ml-2 text-green-600">
                  {formatTime(item.actual_departure)}
                </span>
              )}
            </div>
            <div>
              <strong>Scheduled Arrival:</strong>
              {item.actual_arrival ? (
                <s>{formatTime(item.scheduled_arrival)}</s>
              ) : (
                formatTime(item.scheduled_arrival)
              )}
              {item.actual_arrival && (
                <span className="ml-2 text-green-600">
                  {formatTime(item.actual_arrival)}
                </span>
              )}
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="w-full border-t-2 border-gray-300 mt-1"></div>
                <div className="mt-1 text-sm">{journeyDuration}</div>
                <div className="text-xs text-gray-500">Non stop</div>
              </div>
            </div>
            {item.status !== "Cancelled" && (
              <div className="border-t-2 border-gray-300 pt-2 flex items-center justify-center">
                <button
                  onClick={() => handleNotificationClick(item.flight_id)}
                  className={`bg-black text-white px-2 py-1 rounded`}
                >
                  <BsBell size={25} />
                </button>
              </div>
            )}
            {item.status === "Cancelled" && (
              <div className="text-red-500">
                This flight has been cancelled.
              </div>
            )}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <>
      <Accordion variant="separated" bg={"white"} radius="xl" className="mb-32">
        {items}
      </Accordion>

      <Modal
        opened={openedModal}
        onClose={handleModalClose}
        title="Notification Preferences"
      >
        <form onSubmit={handleNotificationSubmit}>
          <div className="flex flex-col space-y-4">
            <Radio.Group
              value={selectedNotificationMethod}
              onChange={setSelectedNotificationMethod}
              label="Choose notification method"
            >
              <Group>
                <Radio value="email" label="Email" />
                <Radio value="phone" label="Phone" />
              </Group>
            </Radio.Group>

            {selectedNotificationMethod === "email" && (
              <TextInput
                required
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            )}

            {selectedNotificationMethod === "phone" && (
              <NumberInput
                required
                type="tel"
                label="Phone Number"
                placeholder="Enter your phone number"
                hideControls
                allowDecimal={false}
                allowNegative={false}
                allowLeadingZeros={false}
                clampBehavior="none"
                value={contactInfo}
                onChange={(value) => setContactInfo(value)}
              />
            )}

            {error && <div className="text-red-500">{error}</div>}

            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default FlightAccordion;
