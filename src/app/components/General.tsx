import styles from "@/app/page.module.css";

export const General = () =>{
    return (
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
    )
}