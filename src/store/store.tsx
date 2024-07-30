import { create } from 'zustand'

export const useFlightStore = create((set) => ({
  flightResults : [],
  setFlightResults : (newFlightResults) => set({flightResults: newFlightResults}),
}))

export const useAdminStore = create((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}))