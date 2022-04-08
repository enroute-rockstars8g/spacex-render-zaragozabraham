import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { getPokemonByID } from '../services/pokemon/service';

export const Pokedex:FC = () => {
    const [pokemonID, setPokemonID] = useState<number> (1);
    const [actualPokemon, setActualPokemon] = useState<any>(undefined);

    useEffect(()=>{
        const firstPokemon = async () => {
            const newPokemon = await getPokemonByID(1); 
            setActualPokemon(newPokemon);
        };
        firstPokemon();
    }, [])
    

    const getPokemonID = (event:ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != "") {
            setPokemonID(parseInt(event.target.value));
        } else {
            setPokemonID(1);
        }     
    };

    const fetchPokemon = async () => {
        const newPokemon = await getPokemonByID(pokemonID);
        setActualPokemon(newPokemon);
    };

    const renderIndices = (listIndex:any[]) => {
        const paragraphs = [];

        // Loop rendering
        for (const index of listIndex) {

            paragraphs.push(
                <p>Game: {index.version.name} Index: {index.game_index}</p>
            )
        }
        // Manual rendering = bad
        // return [
        //     <p>Game: {actualPokemon.game_indices[0].version.name} Index: {actualPokemon.game_indices[0].game_index}</p>,
        //     <p>Game: {actualPokemon.game_indices[1].version.name} Index: {actualPokemon.game_indices[1].game_index}</p>,
        //     <p>Game: {actualPokemon.game_indices[2].version.name} Index: {actualPokemon.game_indices[2].game_index}</p>
        // ]
    }

    console.log(actualPokemon);

    return (
        <div>
            <p>Powerfull Pokedex</p>
            <p>Enter pokemon ID</p>
            <input type="text" onChange={getPokemonID} />
            {actualPokemon !== undefined ? <div>
                <p>Name: {actualPokemon.name}</p>
                <p>Weight: {actualPokemon.weight}</p>
                <p>Height: {actualPokemon.height}</p>
                <p>Base Exp: {actualPokemon.base_experience}</p>
                <p>Game Indices</p>
                {/* using () instead of {} sets a implicit return (you don't have to write return) */}
                {actualPokemon.game_indices.map((game_index, index) => (
                    <p key={`pokemon${actualPokemon.name}-index-${index}`}>Game: {game_index.version.name} Index: {game_index.game_index}</p>
                ))}
                {/* {renderIndices(actualPokemon.game_indices)} */}
            </div> : null}
            <button onClick={fetchPokemon}>Search</button>
        </div>
    )
}