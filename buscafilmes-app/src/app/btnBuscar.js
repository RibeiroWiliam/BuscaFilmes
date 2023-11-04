"use client"

import styles from './page.module.css';
import React, { useState } from 'react';

export default function BtnBuscar() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        BuscarFilmes(event)
    }

    const BuscarFilmes = (event) => {
        event.preventDefault();
        const apiKey = "afbeee5dc8a56d84b3457702342ba299"
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
    }

    return (
        <form className={styles.searchBox} onSubmit={(event) => BuscarFilmes(event)}>
            <input type="search" name="" className={styles.searchInput} value={query} onChange={handleInputChange} placeholder="Digite o nome de um filme..." />
            <button type="submit" className={styles.btnBuscar}><i class='bx bx-search'></i></button>
        </form >
    )
}
