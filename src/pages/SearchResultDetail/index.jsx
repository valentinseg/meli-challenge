import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import SearchBox from "../../components/SearchBox";
import Breadcrumb from "../../components/Breadcrumb";
import ItemDetail from "../../components/ItemDetail";
import ItemNotFound from "../../components/ItemDetail/ItemNotFound";
import useItemDetail from "../../hooks/useItemDetail";
import useCategory from "../../hooks/useCategory";

const SearchResultDetail = () => {
    const { id } = useParams();
    const {loading, item} = useItemDetail({
        id: id,
    });
    const {loading: loadingCategory, category} = useCategory({
        id: item?.category_id,
    });

    if (loading) return <Spinner />;

    return (
        <>
            <SearchBox />
            {item ? (
                <>
                    {!loadingCategory && category && (
                        <Breadcrumb path={category.path_from_root} />
                    )}
                    <ItemDetail item={item} />
                </>
            ) : (
                <ItemNotFound />
            )}
        </>
    );
};

export default SearchResultDetail;
