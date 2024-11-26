import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

type Character = {
    id: number;
    name: string;
}

export const Characters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <div style={{
            display: "flex",
            backgroundColor: "red",
        }}>
            <div>
                <h1>Characters List</h1>
                <ul>
                    {characters.map(character => (
                        <Link key={character.id} to="#">
                            <li>{character.name}</li>
                        </Link>
                    ))}    
                </ul>
            </div>
            <div 
                style={{
                    backgroundColor: "green", 
                    flex: 1
                }}>
                <Outlet />
            </div>
        </div>
    );
}