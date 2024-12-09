"use client";
import styles from "./page.module.css";
import {useEffect, useState} from "react";

type Category = {
    type: { name: string };
};

type Pokemon = {
    id: number;
    name: string;
    url: string;
    image: string;
    categories: Category[];
};

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [name, setName] = useState("");

    const fetchTenPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        return data.results;
    };

    const fetchPokemon = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    };

    const fetchData = async () => {
        const pokemonList = await fetchTenPokemons();
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
    }, []);

    return (
        <>
            <header className={styles.header} id={"hero"}>
                <img src={"./pokemon.svg"} alt={"Logo"} />
                <nav>
                    <ul>
                        <a href={'#hero'}>Inicio</a>
                        <a href={'#general'}>General</a>
                        <a href={'#list'}>Listado</a>
                        <a href={'#contact'}>Contacto</a>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <img src={"./pokeball.svg"} alt={"Pokeball"} />
                    <div>
                        <h1>¡Bienvenido al mundo Pokémon!</h1>
                        <h2>Explora y revive tu aventura favorita</h2>
                        <p>
                            Descubre todos tus Pokémon favoritos en un solo lugar. Nuestra
                            plataforma te permite buscar, filtrar y aprender datos fascinantes
                            sobre cada Pokémon.
                        </p>
                    </div>
                </div>

                <div className={styles.general} id={"general"}>
                    <h1>General</h1>
                    <p>
                        Pokémon es una de las franquicias más icónicas del mundo del
                        entretenimiento, reconocida por su amplio universo de criaturas y su
                        impacto cultural a nivel global.
                    </p>
                    <div>
                        <section>
                            <h2>Creación</h2>
                            <p>
                                Fue creado en 1996 por Satoshi Tajiri y desarrollado por Game
                                Freak para Nintendo. La primera entrega fue el videojuego
                                *Pokémon Rojo y Verde* lanzado en Japón.
                            </p>
                        </section>
                        <section>
                            <h2>Difusión</h2>
                            <p>
                                Fue famoso en todo el mundo, alcanzando un gran éxito con su
                                anime, cartas coleccionables, juguetes, y videojuegos que han
                                vendido más de 400 millones de copias a nivel global.
                            </p>
                        </section>
                        <section>
                            <h2>Autor</h2>
                            <p>
                                Fue creado por Satoshi Tajiri, inspirado por su amor por la
                                recolección de insectos durante su infancia. Tajiri diseñó el
                                concepto de capturar y coleccionar criaturas fantásticas.
                            </p>
                        </section>
                    </div>
                </div>

                <div className={styles.list} id={"list"}>
                    <h1>Pokemones</h1>
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type={"text"}
                               onInput={(e) =>{
                                   //@ts-ignore
                                   setName(e.target.value)
                               }}
                               placeholder={"Ingrese un nombre!"}
                               name={"name"} />
                    </form>
                    <div>
                        {pokemons.filter(pokemon => name == "" || pokemon.name.includes(name.toLowerCase())).slice(0, 10).map((pokemon, index) => (
                            <section key={index}>
                                <div>
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                    />
                                </div>
                                <div>
                                    <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                                    <div>
                                        <p>Tipos:
                                            {pokemon.categories.map((category, idx) => (
                                                <span key={idx}> {category.type.name.charAt(0).toUpperCase() + category.type.name.slice(1)}
                                                    {idx < pokemon.categories.length - 1 ? ' | ' : ''}</span>
                                            ))}
                                        </p>

                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <footer className={styles.footer} id={"contact"}>
                <div>

                </div>
            </footer>
        </>
    );
}
