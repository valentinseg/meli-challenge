import React from "react";
import { createSearchParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.scss";

const Breadcrumb = ({ path }) => {

    const getPath = (id) => {
        return `/items?${createSearchParams({ category: id })}`;
    };

    const isLastElem = (index) => index === path.length - 1;

    return (
        <ol className="breadcrumb">
            {path.map((elem, index) => (
                <li key={elem.id} className="breadcrumb-item">
                    <Link to={getPath(elem.id)} className="no-style">
                        {elem.name}
                    </Link>
                    {!isLastElem(index) && (
                        <div className="breadcrumb-item-divider">
                            >
                        </div>
                    )}
                </li>
            ))}
        </ol>
    );
};

Breadcrumb.propTypes = {
    path: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};

export default Breadcrumb;
