const Fav = require('../models/favApp');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const favApps = await Fav.find({});
    res.status(200).json(favApps);
}

async function create(req, res) {
    let favApp = await Fav.create(req.body);
    res.status(201).json(favApp);
}