const { findByQuery, findItemAndDescriptionById } = require("../../services/items");
const { getItems, getItem } = require("../../utils/items");

const getItemsByQuery = (request, response) => {
    const { q: query, category, limit } = request.query;
    findByQuery(query, category, limit).then((resp) => {
        const { results } = resp.data;
        response.json(getItems(results));
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
                category_id: item.category_id,
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
