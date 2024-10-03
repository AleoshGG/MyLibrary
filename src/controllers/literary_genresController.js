const { Literary_genre } = require("../models/models.js");

exports.getGenres = async (req, res) => {
    try {
        const genres = await Literary_genre.findAll();
        
        res.status(200).json(genres);
    } catch (err) {
        return console.log(`Error has ocurred: ${err}`);
    }
}