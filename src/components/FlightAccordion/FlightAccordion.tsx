import React from 'react';
import { Accordion, Badge } from '@mantine/core';
import { useFlightStore } from '../../store/store';
import indigoPlaneLogo from '../../assets/indigo-plane-logo.png';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/en-gb';

dayjs.extend(duration);

const getStatusColor = (status) => {
  const statusColors = {
    'Early': 'bg-green-500',
    'Delayed': 'bg-yellow-500',
    'Cancelled': 'bg-red-500',
    'Arrived': 'bg-blue-500',
  };
  return statusColors[status] || 'bg-gray-500';
};

const formatTime = (time) => dayjs(time).format('YYYY-MM-DD HH:mm A');

const calculateDuration = (start, end) => {
  const duration = dayjs.duration(dayjs(end).diff(dayjs(start)));
  return `${duration.hours()}h ${duration.minutes()}m`;
};

const FlightAccordion = () => {
  const { flightResults } = useFlightStore();

  const items = flightResults?.map((item) => {
    const journeyDuration = calculateDuration(item.scheduled_departure, item.scheduled_arrival);

    return (
      <Accordion.Item key={item.flight_id} value={item.flight_id} className='pt-2'>
        <Accordion.Control icon={<img src={indigoPlaneLogo} alt="Indigo Logo" className="w-8 h-8"/>}>
          <div className="flex items-center space-x-2">
            <span>{item.flight_id}</span>
            <Badge className={`${getStatusColor(item.status)} text-white`}>{item.status}</Badge>
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
              {item.actual_departure ? <s>{formatTime(item.scheduled_departure)}</s> : formatTime(item.scheduled_departure)}
              {item.actual_departure && <span className="ml-2 text-green-600">{formatTime(item.actual_departure)}</span>}
            </div>
            <div>
              <strong>Scheduled Arrival:</strong> 
              {item.actual_arrival ? <s>{formatTime(item.scheduled_arrival)}</s> : formatTime(item.scheduled_arrival)}
              {item.actual_arrival && <span className="ml-2 text-green-600">{formatTime(item.actual_arrival)}</span>}
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div className="w-full border-t-2 border-gray-300 mt-1"></div>
                <div className="mt-1 text-sm">{journeyDuration}</div>
                <div className="text-xs text-gray-500">Non stop</div>
              </div>
            </div>
            <div>
              <strong>Flight Status:</strong> <span className={`${getStatusColor(item.status)} text-white px-2 py-1 rounded`}>{item.status}</span>
            </div>
            {item.status === 'Cancelled' && (
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
    <Accordion variant="separated" bg={'white'} radius="xl" className='mb-32'>
      {items}
    </Accordion>
  );
};

export default FlightAccordion;
