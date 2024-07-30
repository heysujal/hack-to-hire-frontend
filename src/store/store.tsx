import { create } from 'zustand'

export const useFlightStore = create((set) => ({
  bears: 0,
  flightResults : [],

  setFlightResults : (newFlightResults) => set({flightResults: newFlightResults}),
  getAllAirport : async () => {

  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

export const useAdminStore = create((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}))