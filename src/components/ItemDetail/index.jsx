import React from "react";
import PropTypes from "prop-types";

import { CONDITIONS, CURRENCIES } from "../../utils/constants";
import "./styles.scss";

const ItemDetail = ({ item }) => {
    const decimalsStr = String(item.price.decimals).padEnd(2, '0');

    return (
        <div className="item-detail">
            <div className="item-detail-container">
                <div className="item-detail-picture">
                    <img src={item.picture} alt="Imagen de item" width={680} height={680} />
                </div>
                <div className="item-detail-content">
                    <div className="item-detail-header">
                        {`${CONDITIONS[item.condition]} - ${item.sold_quantity} vendidos`}
                    </div>
                    <div className="item-detail-title">
                        {item.title}
                    </div>
                    <div className="item-detail-price">
                        {`${CURRENCIES[item.price.currency]} ${item.price.amount}`}
                        <sup>{decimalsStr}</sup>
                    </div>
                    <div className="item-detail-actions">
                        <button type="submit">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="item-detail-description">
                <h2>Descripción del producto</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired,
        }),
        picture: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
        free_shipping: PropTypes.bool.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default ItemDetail;
