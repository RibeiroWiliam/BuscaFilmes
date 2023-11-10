"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../css/barraPesquisa.css'

export default function BarraPesquisa() {
    const [query, setQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [filters, setFilters] = useState([]);
    const router = useRouter();

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

    const handleFilterClick = () => {
        setShowModal(true);
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
            <FilterModal onClose={() => setShowModal(false)} filters={filters} setFilters={setFilters} />
            <div>
                {filters.map((filter) => (
                    <Tag tag={filter} />
                ))}
            </div>
        </div>
    )
}

function FilterModal({ onClose, filters, setFilters }) {
    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setFilters([...filters, name]);
        } else {
            setFilters(filters.filter((filter) => filter !== name));
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onClose();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Selecione os filtros:</h2>
                <label htmlFor="year">Ano:</label>
                <input type="checkbox" name="year" id="year" onChange={handleFilterChange} />
                <button type="submit" onClick={handleFormSubmit}>Enviar</button>
                <button type="button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

function Tag(tag) {
    return (
        <div>{tag}</div>
    )
}