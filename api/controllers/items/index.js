const { findByQuery, findItemAndDescriptionById } = require("../../services/items");
const { getCategories, getItems, getItem } = require("../../utils/items");

const getItemsByQuery = (request, response) => {
    const { q: query, limit } = request.query;
    findByQuery(query, limit).then((resp) => {
        const { available_filters: availableFilters, results } = resp.data;
        response.json({
            ...getItems(results),
            categories: getCategories(availableFilters),
        });
    }).catch((error) => {
        console.error('items could not be obtained: ', error.response);
        response.status(500).end();
    });
};

const getItemById = (request, response) => {
    const { id } = request.params;
    findItemAndDescriptionById(id).then((resp) => {
        const { item, description } = resp.data;
        response.json({
            item: {
                ...getItem(item),
                sold_quantity: item.sold_quantity,
                description: description.plain_text,
            },
        });
    }).catch((error) => {
        console.error('item could not be obtained: ', error.response);
        response.status(500).end();
    });
};

module.exports = {
    getItemsByQuery,
    getItemById,
};
