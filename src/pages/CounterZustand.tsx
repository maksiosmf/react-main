import { useCounter } from "../contexts/useCounter";

export const CounterZustand = () => {
    const counter = useCounter((state) => state.count);
    const increment = useCounter((state) => state.increment);
    const decrement = useCounter((state) => state.decrement);
    return (
        <div>
            <h1>Counter Zustand</h1>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}