const Fav = require('../models/favApp');

module.exports = {
    index,
    create,
    getFavList
}

async function index(req, res) {
    const favApps = await Fav.find({});
    res.status(200).json(favApps);
}

async function create(req, res) {
    let favApp = await Fav.create(req.body);
    res.status(201).json(favApp);
}

async function getFavList(req, res) {
    const apps = await Fav.find()
    if (req.user && apps.length > 0) {
        const favApps = apps.filter(a => a.favoritedBy.includes(req.user._id))
    } else {
        favApps = []
    }
    res.status(201).json(favApps)
}