import { useContext } from 'react';
import { FridgeContext } from './FridgeContext';

export const useFridge = () => {
    const context = useContext(FridgeContext);

    if (!context) {
        throw new Error('useFridge must be used within a FridgeProvider');
    }
    return context;
};