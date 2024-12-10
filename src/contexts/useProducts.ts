type Product = {
    id: number;
    name: string;
    price: number;
}

const defaultProducts: Product[] = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
];

type UseProductsResult = {
    products: Product[];
    removeProduct: (id: Product["id"]) => void;
};

import create from 'zustand';

export const useProducts = create<UseProductsResult>((set) => ({
    removeProduct: (id: Product["id"]) => set((state: UseProductsResult) => ({
        products: state.products.filter((product: Product) => product.id !== id),
    })),
}));