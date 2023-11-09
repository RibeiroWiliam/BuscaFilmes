"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../css/barraPesquisa.css'

export default function BarraPesquisa() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    if (router.pathname == "/search") {
        useEffect(() => {
            const query = router.query;
            setQuery(query || '');
        }, [router.query]);
    }

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (router.pathname == "/search") {
            router.push(`../${query}`);
        }
        else {
            router.push(`/search/${query}`);
        }
    }

    return (
        <div>
            <form class="searchBox" onSubmit={handleFormSubmit}>
                <input type="search" class="searchInput" name="" value={query} onChange={handleInputChange} placeholder="Digite o nome de um filme..." />
                <button type="submit" class="btnBuscar"><i class='bx bx-search'></i></button>
            </form>
        </div>
    )
}