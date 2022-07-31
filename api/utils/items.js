const getCategories = (availableFilters) => {
    const categoryFilter = availableFilters.find((filter) => filter.id = 'category');
    if (categoryFilter === undefined) return [];
    categoryFilter.values.sort((category, rightCategory) => rightCategory.results - category.results);
    return categoryFilter.values.map((category) => category.id);
};

const getPrice = (price) => {
    const priceStr = price.toString().split('.');
    return {
        amount: Number(priceStr[0]),
        decimals: Number(priceStr[1]) || 0,
    };
};

const getItems = (results) => {
    return results.map((result) => getItem(result));
};

const getItem = (result) => {
    const { id, title, price, currency_id, condition, thumbnail, shipping, address } = result;
    return {
        id: id,
        title: title,
        price: {
            currency: currency_id,
            ...getPrice(price),
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: Boolean(shipping.free_shipping),
        address: {
            state: address.state_name,
        },
    };
};

module.exports = {
    getCategories,
    getItems,
    getItem,
};
