// -28.10.24

// import Greeter from "./components/29.10.24/Greeter";
// import Spel from "./components/29.10.24/Sigma";
// import {Counter} from "./components/29.10.24/Counter";

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <Counter />
//       <Greeter name="Cwel" />
//       <Greeter name="Geba" />
//       <Greeter  />
//       <Spel />
//     </div>
//   );
// }

// export default App

// ------------------------------------------

// -29.10.24

// import {useState, useEffect} from "react";

// type GreeterProps = {
//     name?: string;
// };

// const Greeter = ({name = "domyslne" }: GreeterProps) => {

//   // Będzie wykonywał się z każdym re-renderem komponentu. Za każdym razem kiedy zmieni się props,
//   // state komponentu, cokolwiek ta funkcja sie wykona
//   useEffect(() => {
//     console.log("Sigma Sigma");
//   });

//   // [] => Lista dependencji, czyli lista zmiennych, które obserwuje poniższy useEffect
//   // jeśli wartość zmiennej sie zmieni, useEffect się wykona
//   // w zwiazku z czym jeśli tablica jest pusta
//   // useEffect wykona się tylko raz. podczas gdy fazy montowania
//   // np. idealna sytuacja do pobrania danych z internetu
//   useEffect(() => {
//     console.log("Wykonam się tylko raz");
//   }, []);

//   // Ten useeffect wykona się tylko wtedy, kiedy zmieni się name
//   // w naszym przypadku, kiedy zmieni się name w propsach
//   useEffect(() => {
//     console.log("Twoje nowe imie to: ", name);
//   } , [name]);

//   // Zwraca funkcje tzw. czyszczącą.
//   useEffect(() => {
//     console.log("Wykona sie, gdy komponent bedzie chcial sie odmontowac");
//   }, []);

//   return <h1>Hello {name}!!!</h1>
// }

// function App() {
//   const [visible, setVisible] = useState(true);
//   const [name, setName] = useState("Sigma");

//   const onChangename = () => {
//     setName((prevName) => (prevName === "Sigma" ? "Trolololo" : "Sigma"));
//   };

//   const toogleVisibility = () => {
//     setVisible((previsible) => !previsible);
//   }

//   return (
//     <div>
//       <button type="button" onClick={onChangename}>
//         Change Name
//       </button>
//       <button type="button" onClick={toogleVisibility}>
//         Toggle Visibility
//       </button>
//       {visible && <Greeter name = {name}/>}
//     </div>
//   );
// };

// export default App;

// 29.10.24 Zadania

// Zad 1
// import { useEffect, useState } from "react";

// const URL = "https://jsonplaceholder.typicode.com/users";

// type Geo = {
//   lat: string;
//   lng: string;
// };

// type Company = {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// };

// type Address = {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// };

// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// };

// export const Users = () => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   console.log(users);

//   return (
//     <ul>
//       {users.map((user) => {
//         return <li key={user.id}>{user.name}</li>;
//       })}
//     </ul>
//   );
// };


// ## Zadanie 3 | The Rick and Morty API

// > Stwórz stronę internetową, która wyświetli listę postaci ze strony **The Rick and Morty API**.

// Endpoint: https://rickandmortyapi.com/api/character

// **Definition of Ready:**
// - Określ, jakie dane chcesz pobrać z API.
// - Stwórz funkcję, która wykorzystuje Promise / Async await do pobrania tych danych.

// **Definition of Done:**

// - Dane z API zostały pomyślnie pobrane i przetworzone za pomocą Promise / Async Await.
// - Wyświetlenie danych w HTML działa poprawnie.
// - Obsłuż możliwe błędy, takie jak błędy związane z żądaniem do API lub formatem danych.
// - Wyświetl zdjęcie postaci
// - Wyświetl Nazwę postaci
// - Listę postaci 'kafelków' (użyj grid'a).


// import React, { useEffect, useState } from "react";

// const URL = "https://rickandmortyapi.com/api/character";

// type Character = {
//   image: string;
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
// };

// export const RickAndMorty = () => {
//   const [characters, setCharacters] = useState<Character[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state

//   useEffect(() => {
//     console.log("Fetching data..."); // Debugging output to confirm useEffect is triggered

//     // Fetch data from the API
//     fetch(URL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.results) {
//           console.log("Data fetched successfully:", data.results); // Log data to confirm
//           setCharacters(data.results);
//         } else {
//           throw new Error("No results found in API response.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setError("Failed to load characters. Please try again later.");
//       })
//       .finally(() => setLoading(false)); // Stop loading once fetch completes
//   }, []);

//   console.log("Characters in state:", characters); // Confirm characters are set

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <div>test</div>
//       {loading ? (
//         <p>Loading characters...</p>
//       ) : error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         characters.map((character) => (
//           <div key={character.id} style={{ marginBottom: "20px" }}>
//             <img src={character.image} alt={character.name} width="200" />
//             <h2>{character.name}</h2>
//             <p>Status: {character.status}</p>
//             <p>Species: {character.species}</p>
//             <p>Type: {character.type || "Unknown"}</p>
//             <p>Gender: {character.gender}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };
// export default RickAndMorty;




// 04.11.24

// zad 1

// import React from 'react';
// import CounterWithReset from './components/11/04.11.24/CounterWithReset';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Sigma Licznik</h1>
//       <CounterWithReset />
//     </div>
//   );
// };

// export default App;



// zad 2

/***Zadanie: Lista ras psów**


Twoim zadaniem jest stworzenie komponentu, który pobiera dane o rasach psów z API i wyświetla je w formie listy. Aplikacja powinna być napisana w ReactJS z wykorzystaniem TypeScript oraz hooków useState i useEffect.


**Wymagania:**


1. **Pobieranie danych**:

• Skorzystaj z API: https://api.thedogapi.com/v1/breeds.

• Po załadowaniu komponentu pobierz listę ras psów i zapisz ją w stanie komponentu.

2. **Wyświetlanie danych**:

• Wyświetl nazwę oraz wagę (pole weight.metric) dla każdej rasy.

• Jeśli lista ras psów jest pusta, wyświetl komunikat: „Ładowanie danych…”.

3. **Struktura projektu**:

• Utwórz komponent DogBreeds, który będzie odpowiadał za pobieranie i wyświetlanie danych.

• Skorzystaj z useState do przechowywania listy ras i useEffect do pobrania danych z API przy załadowaniu komponentu.

4. **Obsługa błędów**:

• Jeśli wystąpi błąd podczas pobierania danych, wyświetl komunikat: „Wystąpił błąd podczas pobierania danych.”*/


// import React, { useState, useEffect } from 'react';

// const URL = "https://api.thedogapi.com/v1/breeds";

// type DogBreed = {
//   name: string;
//   weight: {
//     metric: string;
//   };
// };

// const DogBreeds: React.FC = () => {
//   const [breeds, setBreeds] = useState<DogBreed[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchBreeds = async () => {
//       try {
//         const response = await fetch(URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data: DogBreed[] = await response.json();
//         setBreeds(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBreeds();
//   }, []);

//   if (loading) {
//     return <div>Ładowanie danych…</div>;
//   }

//   if (error) {
//     return <div>Wystąpił błąd podczas pobierania danych.</div>;
//   }

//   return (
//     <div>
//       <h1>Lista ras psów</h1>
//       <ul>
//         {breeds.map((breed) => (
//           <li>
//             {breed.name} - {breed.weight.metric}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DogBreeds;


// zad 3

// import { useEffect, useState } from "react";

// export const Clock = () => {
//   const [time, setTime] = useState(new Date().toTimeString());
//   let id: number;

//   useEffect(() => {
//     id = setInterval(() => {setTime(new Date().toTimeString())}, 1000);
//     return () => clearInterval(id);
//   }, []);

//   return <h1>{time}</h1>;
// }

// export default Clock;




// 05.11.24

// import { LoginPage } from "./pages/LoginPage";
// import { RegisterPage } from "./pages/RegisterPage";
// import { ToDoList } from "./pages/ToDoList";
// import { RefExample } from "./pages/RefExample";
// import { Animation } from "./pages/Animation";
// import { UserPage } from "./pages/UserPage";

// function App() {
//   return (
//     <div>
//       <LoginPage />
//       <RegisterPage />
//       <ToDoList />
//       <RefExample />
//       <Animation />
//       <UserPage />
//     </div>
//   )
// }

// export default App;


// 18.11.24

// import { Router } from "./components/Router"

// function App() {
//   return (
//     <div>
//       <Router />
//     </div>
//   )
// }

// export default App;


import { Router } from "./components/Router"
import { FridgeProvider } from "./contexts/FridgeProvider";
function App() {
  return (
    <div>
      <FridgeProvider>
      <Router />
      </FridgeProvider>
    </div>
  )
}
export default App;