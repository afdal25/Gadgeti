const { getProducts } = require('../services/userServices');

const home = async(req, res) => {
    const products = await getProducts();
    res.render('pages/home', { products });
}

const about = (req, res) => {
    res.render('pages/about');
}

const product = async(req, res) => {
    const products = await getProducts();
    res.render('pages/product', { products });
}

const contact = (req, res) => {
    res.render('pages/contact');
}

module.exports = {
    home,
    about,
    product,
    contact
}