import { useContext } from "react";
import { CounterContext, CounterContextType } from "../contexts/CounterContext";

export const useCounter = () => {
    const context = useContext<CounterContextType>(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};
