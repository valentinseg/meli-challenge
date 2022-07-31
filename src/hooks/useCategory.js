import { useEffect, useState } from "react";

import { getCategoryById } from "../services/categories";

const useCategory = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (id && id !== '') {
            setLoading(true);
            getCategoryById(id).then((response) => {
                const { data } = response;
                if (data.category) setCategory(data.category);
                setLoading(false);
            }).catch((error) => {
                console.error('category could not be obtained: ', error);
                setLoading(false);
            });
        }
    }, [id]);

    return {loading, category};
};

export default useCategory;
