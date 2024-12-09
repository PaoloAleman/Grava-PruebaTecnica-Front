import styles from "@/app/page.module.css";
import {useEffect, useState} from "react";

type Category = {
    type: { name: string };
};

type Type = {
    name: string;
    url: string;
}

type Pokemon = {
    id: number;
    name: string;
    url: string;
    image: string;
    categories: Category[];
};

export const PokemonList = ()=>{
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [name, setName] = useState("");
    const [types, setTypes] = useState<Type[]>([]);
    const [typeSelected, setTypeSelected] = useState("");

    const fetchPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        return data.results;
    };

    const fetchTypes = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/type");
        const data = await res.json();
        return data.results;
    };

    const fetchPokemon = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    };

    const fetchData = async () => {
        const pokemonList = await fetchPokemons();
        return await Promise.all(
            pokemonList.map(async (pokemon: Pokemon) => {
                const details = await fetchPokemon(pokemon.url);
                return {
                    ...pokemon,
                    image: details.sprites.other.dream_world.front_default || '',
                    categories: details.types,
                };
            })
        );
    };

    useEffect(() => {
        fetchData().then(data => setPokemons(data));
        fetchTypes().then(data => setTypes(data))
    }, []);

    const filteredPokemons = pokemons
        .filter((pokemon) => {
            const matchesName =
                name === "" || pokemon.name.toLowerCase().includes(name.toLowerCase());
            const matchesType =
                typeSelected === "" ||
                pokemon.categories.some((category) =>
                    category.type.name.toLowerCase().includes(typeSelected.toLowerCase())
                );
            return matchesName && matchesType;
        })
        .slice(0, 10);

    return (
        <div className={styles.list} id={"list"}>
            <h1>Pokemones</h1>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type={"text"}
                       onInput={(e) => {
                           //@ts-ignore
                           setName(e.target.value)
                       }}
                       placeholder={"Ingrese un nombre!"}
                       name={"name"}/>
                <label htmlFor="type">Tipo</label>
                <select
                    onChange={(e) => {
                        setTypeSelected(e.target.value)
                    }}
                    name={"type"}>
                    <option value={""}>Todos</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.name}> {type.name}</option>
                    ))}
                </select>
            </form>
            <div>
                {filteredPokemons.map((pokemon, index) => (
                    <section key={index}>
                        <div>
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                            />
                        </div>
                        <article>
                            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                            <div>
                                <p>Tipos:
                                    {pokemon.categories.map((category, idx) => (
                                        <span
                                            key={idx}> {category.type.name.charAt(0).toUpperCase() + category.type.name.slice(1)}
                                            {idx < pokemon.categories.length - 1 ? ' | ' : ''}</span>
                                    ))}
                                </p>

                            </div>
                        </article>
                    </section>
                ))}
            </div>
        </div>
    )
}