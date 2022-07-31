import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/Logo_ML.png";
import logo2x from "../../assets/Logo_ML@2x.png";
import "./styles.scss";

const SearchBox = ({ initialKeyword, handleSearch }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(initialKeyword || '');

    const defaultSearch = (keyword) => {
        navigate({
            pathname: '/items',
            search: `?${createSearchParams({ search: keyword })}`
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (keyword) {
            if (handleSearch) handleSearch(keyword);
            else defaultSearch(keyword);
        }
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <header>
            <div className="search-box">
                <img
                    srcSet={`${logo}, ${logo2x} 2x`}
                    src={logo2x}
                    className="app-logo"
                    alt="Logo"
                />
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={keyword}
                        onChange={handleChange}
                        placeholder="Nunca dejes de buscar"
                        aria-label="Ingresá lo que quieras buscar"
                    />
                    <button type="submit" aria-label="Buscar">
                        <i className="button-search"></i>
                    </button>
                </form>
            </div>
        </header>
    );
};

SearchBox.defaultProps = {
    initialKeyword: '',
    handleSearch: null,
};

SearchBox.propTypes = {
    initialKeyword: PropTypes.string,
    handleSearch: PropTypes.func,
};

export default SearchBox;
