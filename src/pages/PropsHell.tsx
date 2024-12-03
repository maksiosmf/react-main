import React, { createContext, useState, PropsWithChildren, useContext } from 'react';

export const ComponentA = () => {
    console.log('ComponentA');
    return (
        <div>
            <span>ComponentA</span>
        </div>
    )
}

interface NumContextResult {
    num: number;
    shuffle: () => void;
}

const NumContext = createContext<NumContextResult | null>(null);

const NumProvider = ({children}: PropsWithChildren) => {
    const [num, setNum] = useState(Math.random());

    const shuffle = () => {
        setNum(Math.random());
    }

    return (
        <NumContext.Provider value={{num, shuffle}}>
            {children}
        </NumContext.Provider>
    )
}

const useNum = () => {
    const cotext = useContext(NumContext);

    if (!cotext) {
        throw new Error('Uzyto poza contextem');
    }

    return cotext;
}

export const PropsHell = () => {
    <NumProvider>
        <div>
            <h1>PropsHell</h1>
            {/* <button type="button">Shuffle</button> */}
            
        </div>
        </NumProvider>
}