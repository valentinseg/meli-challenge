import React from "react";
import PropTypes from "prop-types";

import Item from "../Item";
import "./styles.scss";

const ItemList = ({ items }) => {
    return (
        <div className="list-of-items">
            {
                items.map(({id, title, price, picture, free_shipping, address}) => (
                    <Item
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        picture={picture}
                        free_shipping={free_shipping}
                        address={address}
                    />
                ))
            }
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.shape({
                currency: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                decimals: PropTypes.number.isRequired,
            }),
            picture: PropTypes.string.isRequired,
            free_shipping: PropTypes.bool.isRequired,
            address: PropTypes.shape({
                state: PropTypes.string.isRequired,
            }),
        }),
    ),
};

export default ItemList;
