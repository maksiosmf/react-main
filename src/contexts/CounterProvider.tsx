import { PropsWithChildren } from "react";
// import { Counter } from "../components/10/28.10.24/Counter";
import { useState } from "react";
import { createContext } from "react";

const CounterContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
    const [count, setCounter] = useState(0);

    const increment = () => setCounter((prev) => prev + 1);
    const decrement = () => setCounter((prev) => prev - 1);
    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    );
};