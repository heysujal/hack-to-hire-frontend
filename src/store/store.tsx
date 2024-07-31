import { create } from 'zustand'

export const useFlightStore = create((set, get) => ({
  flightResults : [],
  subscribedFlights: new Set(),
  setFlightResults : (newFlightResults) => set({flightResults: newFlightResults}),
  subscribeFlight: (flightId) => {
    const updatedSet = new Set(get().subscribedFlights);
    updatedSet.add(flightId);
    set({ subscribedFlights: updatedSet });
  },
  unsubscribeFlight: (flightId) => {
    const updatedSet = new Set(get().subscribedFlights);
    updatedSet.delete(flightId);
    set({ subscribedFlights: updatedSet });
  },
  updateFlight: (updatedFlight) => {
    const updatedFlights = get().flightResults.map((flight) =>
      flight.flight_id === updatedFlight.flight_id ? updatedFlight : flight
    );
    set({ flightResults: updatedFlights });
  },
}))

export const useAdminStore = create((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}))