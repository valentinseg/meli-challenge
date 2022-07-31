const getPrice = (price) => {
    const priceStr = price.toString().split('.');
    return {
        amount: Number(priceStr[0]),
        decimals: Number(priceStr[1]) || 0,
    };
};

const getCategories = (categoriesMap) => {
    const categories = [...categoriesMap.values()];
    categories.sort((category, rightCategory) => rightCategory.results - category.results);
    return categories.map((category) => category.id);
};

const getItems = (results) => {
    const items = [];
    const categoriesMap = new Map();
    results.forEach((result) => {
        items.push(getItem(result));
        if (categoriesMap.has(result.category_id)) {
            const elem = categoriesMap.get(result.category_id);
            categoriesMap.set(result.category_id, {
                ...elem,
                results: elem.results + 1,
            })
        } else {
            categoriesMap.set(result.category_id, {
                id: result.category_id,
                results: 1,
            });
        }
    });

    return {
        items: items,
        categories: getCategories(categoriesMap),
    };
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
    getItems,
    getItem,
};
