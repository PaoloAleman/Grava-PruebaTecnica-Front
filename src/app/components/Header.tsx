import styles from "@/app/page.module.css";

export const Header = () => {
    return (
        <header className={styles.header} id={"hero"}>
            <h1 className={styles.pokemonText}>Pokemon</h1>
            <nav>
                <ul>
                    <a href={'#hero'}>Inicio</a>
                    <a href={'#general'}>General</a>
                    <a href={'#list'}>Listado</a>
                    <a href={'#contact'}>Contacto</a>
                </ul>
            </nav>
        </header>
    )
}