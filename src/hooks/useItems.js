import { useEffect, useState } from "react";

import { getItemsByKeyword } from "../services/items";

const useItems = ({ keyword }) => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (keyword && keyword !== '') {
            setLoading(true);
            getItemsByKeyword(keyword).then((response) => {
                const { data } = response;
                if (data.items && data.items.length > 0) setItems(data.items);
                setLoading(false);
            }).catch((error) => {
                console.error('items could not be obtained: ', error);
                setLoading(false);
            });
        }
    }, [keyword]);

    return {loading, items};
};

export default useItems;
