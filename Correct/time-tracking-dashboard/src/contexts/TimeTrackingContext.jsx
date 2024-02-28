import { createContext } from "react";
import { useContext } from "react";

export const TimeTrackingContext = createContext();

export function useTimeTrackingContext() {
    return useContext(TimeTrackingContext);
}