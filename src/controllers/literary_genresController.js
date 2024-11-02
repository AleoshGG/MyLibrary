const { Literary_genre } = require("../models/models.js");

exports.getGenres = async (req, res) => {
  try {
    const genres = await Literary_genre.findAll();

    res.status(200).json(genres);
  } catch (err) {
    return console.log(`Error has ocurred: ${err}`);
  }
};

exports.addGenre = async (req, res) => {
  try {
    const newGenre = req.body;
    const genre = await Literary_genre.create(newGenre);

    res.status(200).json({
      msg: "Success",
      genre: [genre.id_literary_genre, genre.genre_name],
    });
  } catch (err) {
    return console.log(`Error has ocurred: ${err}`);
  }
};
