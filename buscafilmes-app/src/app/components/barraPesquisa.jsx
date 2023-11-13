"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "../css/barraPesquisa.css";

export default function BarraPesquisa() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const input = useRef(),
    languageInput = useRef(),
    yearInput = useRef();
  const searchParams = useSearchParams();

  const year = yearInput.value;

  useEffect(() => {
    input.value = searchParams.get("q");
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query && router.pathname == "/search") {
      router.push(`?q=${query}`);
    } else if (query) {
      router.push(`/search?q=${query}&year=${year}`);
    }
  };

  function handleFilterClick() {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div class="searchBox">
          <input
            ref={input}
            type="search"
            class="searchInput"
            name=""
            value={query}
            onChange={handleInputChange}
            placeholder="Digite o nome de um filme..."
          />
          <button type="submit" class="btnSearch">
            <i class="bx bx-search"></i>
          </button>
        </div>
        <button type="button" class="btnFilters" onClick={handleFilterClick}>
          <i class="bx bx-slider"></i>
        </button>
      </form>
      {showFilters && (
        <div class="filtersBox">
          <div>Filtrar por:</div>
          <form>
            <label for="language"> Idioma: </label>
            <select name="language" ref={languageInput}>
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">Inglês</option>
            </select>

            <label for="year"> Ano de Lançamento: </label>
            <input
              ref={yearInput}
              type="number"
              min="1900"
              max="2023"
              name="year"
            />

            <button type="submit" onClick={handleFormSubmit}>
              Aplicar filtros
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function Tag(tag) {
  return <div>{tag}</div>;
}
