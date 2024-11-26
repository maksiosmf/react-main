import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
}

export const CharacterById = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  return (
    <div>
      {character && (
        <div>
          <h1>Character with id: {character.id}</h1>
          <h2>{character.name}</h2>
        </div>
      )}
    </div>
  );
};