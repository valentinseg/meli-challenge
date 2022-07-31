import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import SearchBox from "../../components/SearchBox";
import ItemDetail from "../../components/ItemDetail";
import ItemNotFound from "../../components/ItemDetail/ItemNotFound";
import useItemDetail from "../../hooks/useItemDetail";

const SearchResultDetail = () => {
    const { id } = useParams();
    const {loading, item} = useItemDetail({
        id: id,
    });

    if (loading) return <Spinner />;

    return (
        <>
            <SearchBox />
            {item ? (
                <ItemDetail item={item} />
            ) : (
                <ItemNotFound />
            )}
        </>
    );
};

export default SearchResultDetail;
