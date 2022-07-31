import React from "react";
import { useSearchParams } from "react-router-dom";

import EmptyItemList from "../../components/EmptyItemList";
import ItemList from "../../components/ItemList";
import SearchBox from "../../components/SearchBox";
import Spinner from "../../components/Spinner";
import useItems from "../../hooks/useItems";

const SearchResults = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {loading, items} = useItems();

    const handleSearch = (keyword) => {
        setSearchParams({
            search: keyword,
        });
    };

    if (loading) return <Spinner />;

    return (
        <>
            <SearchBox
                initialKeyword={searchParams.get('search')}
                handleSearch={handleSearch}
            />
            {items && items.length > 0 ? (
                <ItemList items={items} />
            ) : (
                <EmptyItemList />
            )}
        </>
    );
};

export default SearchResults;
