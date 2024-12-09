"use client";
import styles from "./page.module.css";
import {PokemonList} from "@/app/components/PokemonList";
import {General} from "@/app/components/General";
import {Hero} from "@/app/components/Hero";
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

export default function Home() {

    return (
        <>
            <Header />

            <main className={styles.main}>
                <Hero />

                <General />

                <PokemonList />
            </main>

            <Footer />
        </>
    );
}
