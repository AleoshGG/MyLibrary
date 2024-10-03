const { Writings, Book, Author } = require("../models/models.js");

exports.addWriting = async (req, res) => {
  try {
    const { id_author, id_book } = req.body;

    await Writings.create({ id_author, id_book });

    res.status(201).send({ msg: "Resourse created successfully" });
  } catch (err) {
    return res.status(500).send(`Error has ocurred: ${err}`);
  }
};

exports.getAuthorsByBook = async (req, res) => {
  try {
    const id_book = req.params.id;
    const book = await Book.findByPk(id_book, {
      include: { model: Author, as: "Author" }, // Incluye los autores
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book.Author); // Devuelve los autores del libro
  } catch (err) {
    return res.status(500).json({ message: `Error has occurred: ${err}` });
  }
};

exports.getBookByAuthor = async (req, res) => {
  try {
    const id_author = req.params.id;
    const author = await Author.findByPk(id_author, {
      include: { model: Book, as: "Book" }, // Incluye los autores
    });

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(author.Book); // Devuelve los autores del libro
  } catch (err) {
    return res.status(500).json({ message: `Error has occurred: ${err}` });
  }
};
