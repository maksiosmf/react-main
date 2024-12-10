import { create } from "zustand";

type useCounterResult = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounter = create<useCounterResult>((set) => ({
    count: 0,
    increment: () => {
        set((prevState: useCounterResult) => ({count: prevState.count + 1}));
    },
    decrement: () => {
        set((prevState: useCounterResult) => ({count: prevState.count - 1}));
    }
}));