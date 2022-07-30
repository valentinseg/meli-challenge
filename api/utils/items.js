const getCategories = (availableFilters) => {
    const categoryFilter = availableFilters.find((filter) => filter.id = 'category');
    if (categoryFilter === undefined) return [];
    categoryFilter.values.sort((category, rightCategory) => rightCategory.results - category.results);
    return categoryFilter.values.map((category) => category.id);
};

const getPrice = (price) => {
    const priceStr = price.toString().split('.');
    return {
        amounts: Number(priceStr[0]),
        decimals: Number(priceStr[1])
    };
};

const getItems = (results) => {
    return results.map((result) => getItem(result));
};

const getItem = (result) => {
    const { id, title, price, currency_id, condition, thumbnail, shipping } = result;
    return {
        id: id,
        title: title,
        price: {
            currency: currency_id,
            ...getPrice(price),
        },
        condition: condition,
        picture: thumbnail,
        free_shipping: Boolean(shipping.free_shipping),
    };
};

module.exports = {
    getCategories,
    getItems,
    getItem,
};
