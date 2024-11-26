import { createContext } from "react";

export type FridgeItem = {
    name: string;
    id: number;
    weight: number;
};

type FridgeContextResult = {
    data: FridgeItem[];
    addIngredient: (ingredient: Omit<FridgeItem, "id">) => void;
};
export const FridgeContext = createContext<FridgeContextResult>({
    data: [],
    addIngredient: () => {}
});

FridgeContext.displayName = "FridgeContext";