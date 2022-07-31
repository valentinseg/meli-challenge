import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import shipping from "../../../assets/ic_shipping.png";
import shipping2x from "../../../assets/ic_shipping@2x.png";
import "./styles.scss";

const Item = ({ id, title, price, picture, free_shipping, address }) => {
    return (
        <Link to={`/items/${id}`} className="no-style">
            <div className="item">
                <div className="item-container">
                    <div className="item-picture">
                        <img src={picture} alt="Imagen de item" />
                    </div>
                    <div className="item-content">
                        <div className="item-description">
                            <div className="item-price">
                                $ {price.amount}
                                {free_shipping && (
                                    <img
                                        srcSet={`${shipping}, ${shipping2x} 2x`}
                                        src={shipping2x}
                                        alt="Envío gratis"
                                    />
                                )}
                            </div>
                            <div className="item-title">
                                {title}
                            </div>
                        </div>
                        <div className="item-state">
                            {address.state}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};

Item.propTypes = {
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
};

export default Item;
