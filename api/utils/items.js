const getPrice = (price) => {
    const priceStr = price.toString().split('.');
    return {
        amount: Number(priceStr[0]),
        decimals: Number(priceStr[1]) || 0,
    };
};

const getCategories = (availableFilters) => {
    const categoryFilter = availableFilters.find((filter) => filter.id = 'category');
    if (categoryFilter === undefined) return [];
    categoryFilter.values.sort((category, rightCategory) => rightCategory.results - category.results);
    return categoryFilter.values.map((category) => category.id);
};

const getItems = (results) => {
    return results.map((result) => getItem(result));
};

const getItem = (result) => {
    const { id, title, price, currency_id, condition, thumbnail, shipping, address } = result;
    const item = {
        id: id,
        title: title,
        price: {
            currency: currency_id,
            ...getPrice(price),
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: Boolean(shipping.free_shipping),
    };
    if (address) {
        item.address = {
            state: address.state_name,
        };
    }
    return item;
};

module.exports = {
    getCategories,
    getItems,
    getItem,
};
