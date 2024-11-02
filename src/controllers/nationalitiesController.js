const { Nationality } = require("../models/models.js");

exports.getNationalities = async (req, res) => {
  try {
    const nationalities = await Nationality.findAll();

    res.status(200).json(nationalities);
  } catch (err) {
    return console.log(`Error has occurred ${err}`);
  }
};

exports.addNationality = async (req, res) => {
  try {
    const newNationality = req.body;
    const nationality = await Nationality.create(newNationality);

    res.status(200).json({
      msg: "Success",
      nationality: [nationality.id_nationality, nationality.nationality_name],
    });
  } catch (err) {
    return console.log(`Error has ocurred: ${err}`);
  }
};
