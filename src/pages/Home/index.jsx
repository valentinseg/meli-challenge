import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import SearchBox from "../../components/SearchBox";

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = (keyword) => {
        navigate({
            pathname: '/items',
            search: `?${createSearchParams({ search: keyword })}`
        });
    };

    return (
        <SearchBox handleSearch={handleSearch} />
    );
};

export default Home;
