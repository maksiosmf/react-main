import { useState, useEffect } from 'react';
import { AddProductPage } from './AddProductPage';

interface Product {
  id: number;
  name: string;
  weight: number;
}

export const FridgePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/fridge')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProductToFridge = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id: number) => {
    fetch(`/api/fridge/${id}`, { method: 'DELETE' })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      });
  };

  return (
    <div>
    <AddProductPage onAddProduct={addProductToFridge} />
      <h1>Stan lodówki</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.weight}g
            <button onClick={() => removeProduct(product.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};