import { useEffect, useState } from "react";

import { getItemsByKeyword } from "../services/items";

const useItems = ({ keyword, category }) => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const isValidParam = (param) => param && param !== '';

    useEffect(() => {
        if (isValidParam(keyword) || isValidParam(category)) {
            setLoading(true);
            getItemsByKeyword(keyword, category).then((response) => {
                const { data } = response;
                if (data.items && data.items.length > 0) setItems(data.items);
                if (data.categories && data.categories.length > 0) setCategories(data.categories);
                setLoading(false);
            }).catch((error) => {
                console.error('items could not be obtained: ', error);
                setLoading(false);
            });
        }
    }, [keyword, category]);

    return {loading, items, categories};
};

export default useItems;
