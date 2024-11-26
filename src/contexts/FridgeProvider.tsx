import { PropsWithChildren, useState } from "react";
import { FridgeContext } from "./FridgeContext";

type FridgeItem = {
    id: number;
    name: string;
    weight: number;
};

export const FridgeProvider = ({ children }: PropsWithChildren<{}>) => {
    const [data, setData] = useState<FridgeItem[]>([
        {
            id: 0,
            name: "jajka",
            weight: 500,
        }
    ])

    const addIngredient = (item: FridgeItem) => {
        setData(prevData => [...prevData, item]);
    }

    return (
    <FridgeContext.Provider value={{data, addIngredient: () => undefined}}>
        {children}
    </FridgeContext.Provider>
    );
}