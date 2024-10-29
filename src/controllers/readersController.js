const { Reader } = require("../models/models.js");

exports.addReader = async (req, res) => {
  try {
    const newReader = req.body;
    await Reader.create(newReader);
    res.status(201).json({
      msg: "Success",
      id_reader: newReader.id_reader,
    });
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.getReader = async (req, res) => {
  try {
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;

    const reader = await Reader.findAll({
      where: { first_name: first_name, last_name: last_name },
    });

    res.status(200).json(reader);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.getReaders = async (req, res) => {
  try {
    const readers = await Reader.findAll();

    res.status(200).json(readers);
  } catch (err) {
    return console.log(`Error has occurred: ${err}`);
  }
};

exports.deleteReader = async (req, res) => {
  try {
    const id_reader = req.params.id;

    await Reader.destroy({
      where: { id_reader: id_reader },
    });

    res.status(200).json({
      msg: "success",
    });
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.setStatus = async (req, res) => {
  try {
    const id_reader = req.body.id_reader;
    const newStatus = req.body.status;

    const reader = await Reader.update(
      { account_status: newStatus },
      { where: { id_reader: id_reader } }
    );

    res.status(200).json(reader);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};
