import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/Logo_ML.png';
import './styles.scss';

const SearchBox = ({ handleSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (keyword) handleSearch(keyword);
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <header>
            <div className="search-box">
                <img src={logo} className="app-logo" alt="Logo" />
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={keyword}
                        onChange={handleChange}
                        placeholder="Nunca dejes de buscar"
                        aria-label="Ingresá lo que quieras buscar"
                    />
                    <button type="submit" aria-label="Buscar"><i className="button-search"></i></button>
                </form>
            </div>
        </header>
    );
};

SearchBox.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBox;
