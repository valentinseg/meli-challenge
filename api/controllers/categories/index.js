const { findById } = require("../../services/categories");

const getCategoryById = (request, response) => {
    const { id } = request.params;
    findById(id).then((resp) => {
        const { path_from_root } = resp.data;
        response.json({
            category: {
                path_from_root: path_from_root,
            },
        });
    }).catch((error) => {
        console.error('category could not be obtained: ', error.response);
        response.status(500).end();
    });
};

module.exports = {
    getCategoryById,
};
