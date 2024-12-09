import styles from "@/app/page.module.css";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <img src={"./pokeball.svg"} alt={"Pokeball"}/>
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

    )
}