const prisma = require("../prisma/client");

// Get All Product
async function getProducts() {
    return await prisma.product.findMany();
};

module.exports = {
    getProducts
};