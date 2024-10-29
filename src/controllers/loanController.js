const { Loan } = require("../models/models.js");

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

exports.deleteLoan = async (req, res) => {
  try {
    const id_loan = req.params.id_loan;

    await Loan.destroy({
      where: { id_loan: id_loan },
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
    const id_loan = req.body.id_loan;
    const newStatus = req.body.status;

    const loan = await Loan.update(
      { status: newStatus },
      { where: { id_loan: id_loan } }
    );

    res.status(200).json(loan);
  } catch (err) {
    return console.log(`Error has a occurred: ${err}`);
  }
};
