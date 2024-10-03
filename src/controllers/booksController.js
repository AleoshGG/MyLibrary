const { Book, Literary_genre } = require("../models/models.js");

exports.addBook = async (req, res) => {
  try {
    const { title, date_publication, amount, editorial, id_literary_genre } =
      req.body;

    const newBook = await Book.create({
      title,
      date_publication,
      amount,
      editorial,
      id_literary_genre,
    });

    res
      .status(201)
      .send({ msg: "Resourse created successfully", id_book: newBook.id_book });
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.getBook = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: { model: Literary_genre, as: "Literary_genre" },
    });

    res.status(200).json(books);
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.searchBook = async (req, res) => {
  try {
    const id_book = req.params.id;
    const book = await Book.findAll({
      where: { id_book: id_book },
      include: { model: Literary_genre, as: "Literary_genre" },
    });

    res.status(200).json(book);
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, date_publication, amount, editorial, id_literary_genre } =
      req.body;
    const id_book = req.params.id;

    await Book.update(
      { title, date_publication, amount, editorial, id_literary_genre },
      { where: { id_book: id_book } }
    );

    res.status(200).send({ msg: "Resourse created successfully" });
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id_book = req.params.id;

    await Book.destroy({ where: { id_book: id_book } });

    res.status(200).send({ msg: "Resourse created successfully" });
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};
