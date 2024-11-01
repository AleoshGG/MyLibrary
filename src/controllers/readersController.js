const { Reader, Loan } = require("../models/models.js");
const { Op, fn, col, where } = require('sequelize');

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
    const searchTerm = req.params.name;

    const readers = await Reader.findAll({
      where: where(
        fn('concat', col('first_name'), ' ', col('last_name')),
        { [Op.like]: `%${searchTerm}%` }
      ),
    });

    if (readers.length > 0) {
      res.status(200).json(readers[0]);
    } else {
      res.status(404).json({ message: 'No readers found matching the search term.' });
    }
  } catch (err) {
    console.error(`Error has occurred: ${err}`);
    res.status(500).json({ message: 'An error occurred while searching for readers.' });
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

    await Loan.destroy({
      where: { id_reader: id_reader }
    });

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
