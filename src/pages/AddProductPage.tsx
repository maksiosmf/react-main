import React, { useState } from 'react';

interface AddProductPageProps {
  onAddProduct: (product: { id: number, name: string, weight: number }) => void;
}

export const AddProductPage: React.FC<AddProductPageProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  const addProduct = () => {
    const product = { id: Date.now(), name, weight: parseInt(weight) };

    fetch('/api/fridge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(() => {
      onAddProduct(product);
      setName('');
      setWeight('');
    });
  };

  return (
    <div>
      <h1>Dodaj produkt</h1>
      <input
        type="text"
        placeholder="Nazwa produktu"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Waga (g)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={addProduct}>Dodaj</button>
    </div>
  );
};