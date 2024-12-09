import styles from "@/app/page.module.css";

export const Footer = ()=>{
    return (
        <footer className={styles.footer} id={"contact"}>
            <div>
                <h1 className={styles.pokemonText}>Pokemon</h1>
                <p>¡Bienvenido al mundo Pokémon!</p>
            </div>
            <ul>
                <a href={'#'}><img src={'/instagram.svg'} alt={'Instagram'}/></a>
                <a href={'#'}><img src={'/twitter.svg'} alt={'Twitter'}/></a>
                <a href={'#'}><img src={'/linkedin.svg'} alt={'LinkedIn'}/></a>
            </ul>
        </footer>

    )
}