import React, { useEffect, useState } from 'react';

const RickAndMorthy = () => {
    const [characters, setCharacters] = useState(null);

    const api = "https://rickandmortyapi.com/api/character";

    useEffect(() => {
        async function fetchCherecters() {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setCharacters(data.results);
                console.log(characters);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCherecters();
    }, []);

    return (
        <div>
            <h2>Персонажи Рика и Морти</h2>
            {characters ? (
                <ul>
                    {characters.map(character => (
                        <li key={character.id}>{character.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка персонажей...</p>
            )}
        </div>
    );
};

export default RickAndMorthy;
