import { useEffect, useState } from "react";

import { getItemById } from "../services/items";

const useItemDetail = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (id && id !== '') {
            setLoading(true);
            getItemById(id).then((response) => {
                const { data } = response;
                if (data.item) setItem(data.item);
                setLoading(false);
            }).catch((error) => {
                console.error('item could not be obtained: ', error);
                setLoading(false);
            });
        }
    }, [id]);

    return {loading, item};
};

export default useItemDetail;
