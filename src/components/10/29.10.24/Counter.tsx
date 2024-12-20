import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onReset = () => {
        setCount(0);
    }   
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
};

// export default Counter;