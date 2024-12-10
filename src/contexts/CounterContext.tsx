import { createContext } from "react";

type CounterTypeResult = {counter: number, increment: () => void, decrement: () => void};

export const CounterContext = createContext<CounterTypeResult>({
  counter: 0,
  increment: () => {},
  decrement: () => {}
});