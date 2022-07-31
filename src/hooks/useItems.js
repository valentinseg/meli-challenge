import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getItems } from "../services/items";
import { useSearchParams } from "react-router-dom";

const useItems = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const keyword = searchParams.get('search');
        if (keyword && keyword !== '') {
            setLoading(true);
            getItems(keyword).then((response) => {
                const { data } = response;
                if (data.items && data.items.length > 0) setItems(data.items);
                setLoading(false);
            }).catch((error) => {
                console.error('items could not be obtained: ', error);
            });
        }
    }, [searchParams]);

    return {loading, items};
};

useItems.propTypes = {
    keyword: PropTypes.string.isRequired,
};

export default useItems;
