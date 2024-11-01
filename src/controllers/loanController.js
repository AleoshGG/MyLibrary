const { Loan, Book, Reader } = require("../models/models.js");
const { Op } = require("sequelize");

exports.addLoan = async (req, res) => {
  try {
    const newLoan = req.body;
    await Loan.create(newLoan);
    res.status(201).json({
      msg: "Success",
      id_reader: newLoan.id_loan,
    });
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.getAll = async (req, res) => {
  try {
    const loans = await Loan.findAll();

    res.status(200).json(loans);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.getLoansOfReader = async (req, res) => {
  try {
    const id_reader = req.params.id_reader;

    const loans = await Loan.findAll({
      where: { id_reader: id_reader, status: "not_delivered" },
    });

    res.status(200).json(loans);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.getLoansExpired = async (req, res) => {
  try {
    const today = new Date(); // Fecha actual

    const loans = await Loan.findAll({
      where: {
        delivery_date: { [Op.lt]: today }, // Menor que la fecha actual
        status: "not_delivered",
      },
      include: [
        {
          model: Book,
          attributes: ["title"], // Solo traemos el título del libro
        },
        {
          model: Reader,
          attributes: ["first_name", "last_name", "phone_number", "email"], // Solo traemos los datos necesarios del lector
        },
      ],
    });

    res.status(200).json(loans);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    const id_reader = req.params.id_reader;

    await Loan.destroy({
      where: { id_reader: id_reader, status: "delivered" },
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
    const id_book = req.body.id_book;
    const newStatus = req.body.status;

    const loan = await Loan.update(
      { status: newStatus },
      { where: { id_reader: id_reader, id_book: id_book } }
    );

    res.status(200).json(loan);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};
