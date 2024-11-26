// /***Zadanie: Licznik z automatycznym resetem**

 

// Twoim zadaniem jest stworzenie komponentu licznika, który automatycznie resetuje się po osiągnięciu określonego limitu. Aplikacja powinna być napisana w ReactJS z wykorzystaniem TypeScript oraz hooków useState i useEffect.
 

// **Wymagania:**

 

// 1. **Licznik**:

// • Użyj useState do stworzenia zmiennej count, która będzie przechowywać aktualną wartość licznika.

// • Dodaj przycisk „Dodaj”, który zwiększa licznik o 1 przy każdym kliknięciu.

// 2. **Limit**:

// • Ustaw limit licznika na wartość 10 (możesz dodać go jako stałą).

// • Użyj useEffect do monitorowania wartości licznika. Jeśli licznik osiągnie wartość 10, automatycznie zresetuj go do 0 i wyświetl alert z wiadomością „Licznik został zresetowany!”.

// 3. **Struktura projektu**:

// • Stwórz komponent CounterWithReset.

// • Dodaj odpowiednie typowanie dla stanu i funkcji.*/



// import React, { useState, useEffect } from 'react';

// const Limit = 10;

// interface CounterWithResetSigma {}

// const CounterWithReset: React.FC<CounterWithResetSigma> = () => {
//     const [count, setCount] = useState<number>(0);
    
//     const handleIncrement = () => {
//         setCount((prevCount) => prevCount + 1);
//     };

//     useEffect(() => {
//         if (count >= Limit) {
//             setCount(0);
//             alert('Licznik został zresetowany');
//         }
//     }, [count]);

//     return (
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={handleIncrement}>Dodaj</button>
//         </div>
//     );
// };

// export default CounterWithReset;