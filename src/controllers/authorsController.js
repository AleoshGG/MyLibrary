const { Author, Nationality } = require("../models/models.js");

exports.addAuthor = async (req, res) => {
  try {
    const { first_name, last_name, birthdate, nationality, place_birth } = req.body;

    await Author.create({ first_name, last_name, birthdate, nationality, place_birth });

    res.status(201).send("Resourse created successfully");
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const authors = await Author.findAll({ include: { model: Nationality, as: "Nationality"} });

    res.status(200).json(authors);
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { first_name, last_name, birthdate, nationality, place_birth } = req.body;
    const id_author = req.params.id;

    await Author.update(
      { first_name, last_name, birthdate, nationality, place_birth },
      { where: { id_author: id_author } }
    );

    res.status(200).send("Resourse updated successfully");
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const id_author = req.params.id;

    await Author.destroy({ where: { id_author: id_author } });

    res.status(200).send("Resourse deleted successfully");
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};
