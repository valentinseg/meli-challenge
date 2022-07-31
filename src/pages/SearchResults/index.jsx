import React from "react";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import SearchBox from "../../components/SearchBox";
import ItemList from "../../components/ItemList";
import EmptyItemList from "../../components/ItemList/EmptyItemList";
import useItems from "../../hooks/useItems";

const SearchResults = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {loading, items} = useItems({
        keyword: searchParams.get('search'),
    });

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
