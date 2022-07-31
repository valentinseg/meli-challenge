import React from "react";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import SearchBox from "../../components/SearchBox";
import Breadcrumb from "../../components/Breadcrumb";
import ItemList from "../../components/ItemList";
import EmptyItemList from "../../components/ItemList/EmptyItemList";
import useItems from "../../hooks/useItems";
import useCategory from "../../hooks/useCategory";

const SearchResults = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const {loading, items, categories} = useItems({
        keyword: searchParams.get('search'),
        category: searchParams.get('category'),
    });
    const {loading: loadingCategory, category} = useCategory({
        id: searchParams.get('category') || categories[0],
    });

    const handleSearch = (keyword) => {
        const params = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        params.search = keyword;
        setSearchParams(params);
    };

    if (loading) return <Spinner />;

    return (
        <>
            <SearchBox
                initialKeyword={searchParams.get('search')}
                handleSearch={handleSearch}
            />
            {items && items.length > 0 ? (
                <>
                    {!loadingCategory && category && (
                        <Breadcrumb path={category.path_from_root} />
                    )}
                    <ItemList items={items} />
                </>
            ) : (
                <EmptyItemList />
            )}
        </>
    );
};

export default SearchResults;
