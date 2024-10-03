const { Nationality } = require("../models/models.js");

exports.getNationalities = async (req, res) => {
  try {
    const nationalities = await Nationality.findAll();

    res.status(200).json(nationalities);
  } catch (err) {
    return console.log(`Error has occurred ${err}`);
  }
};
