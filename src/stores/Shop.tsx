import { useProducts } from "../contexts/useProducts";

interface Product {
    id: number;
    name: string;
}

export const Shop = () => {
    const products = useProducts((state: { products: Product[] }) => state.products);

    return (
        <div>
            <h1>Shop</h1>
            <ul>
                {products.map((product: Product) => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};