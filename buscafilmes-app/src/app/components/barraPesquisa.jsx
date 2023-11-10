"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../css/barraPesquisa.css'

export default function BarraPesquisa() {
    const [query, setQuery] = useState('');
    const [language, setLanguage] = useState([]);
    const [year, setYear] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const router = useRouter();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (router.pathname == "/search") {
            router.push(`../${query}/${language}/${year}`);
        }
        else {
            router.push(`/search/${query}/${language}/${year}`);
        }
    }

    function handleFilterClick() {
        if (showFilters) {
            setShowFilters(false);
        }
        else {
            setShowFilters(true);
        }
    }

    function handleClose() {
        setShowFilters(false);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div class="searchBox">
                    <input type="search" class="searchInput" name="" value={query} onChange={handleInputChange} placeholder="Digite o nome de um filme..." />
                    <button type="submit" class="btnSearch"><i class='bx bx-search'></i></button>
                </div>
                <button type="button" class="btnFilters" onClick={handleFilterClick}><i class='bx bx-slider'></i></button>
            </form>
            {showFilters && (
                <div class="filtersBox">
                    <h2>Escolha seus filtros:</h2>
                    <form >
                        <label for='language'> Idioma: </label>
                        <select value={language} name='language'>
                            <option value="pt-BR" defaultChecked> Português (Brasil) </option>
                            <option value="en-US">Inglês</option>
                        </select>

                        <label for='year'> Ano de Lançamento: </label>
                        <input type="number" min="1900" max="2023" value={year} name="year" />

                        <button type="submit" onClick={handleFormSubmit}>Aplicar filtros</button>
                        <button type="button" class="btnClose" onClick={handleClose}>Fechar</button>
                    </form>
                </div>
            )}

        </div>
    )
}

function Tag(tag) {
    return (
        <div>{tag}</div>
    )
}