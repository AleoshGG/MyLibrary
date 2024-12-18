const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Literary_genre = sequelize.define(
  "Literary_genre",
  {
    id_literary_genre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genre_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "literary_genres",
    timestamps: false,
  }
);

const Book = sequelize.define(
  "Book",
  {
    id_book: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Not title",
    },
    date_publication: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Editorial",
    },
    id_literary_genre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "literary_genres",
        key: "id_literary_genre",
      },
    },
  },
  {
    tableName: "books",
    timestamps: false,
  }
);

Book.belongsTo(Literary_genre, {
  foreignKey: "id_literary_genre",
  as: "Literary_genre",
});

const Nationality = sequelize.define(
  "Nationality",
  {
    id_nationality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nationality_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "nationalities",
    timestamps: false,
  }
);

const Author = sequelize.define(
  "Author",
  {
    id_author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "nationalities",
        key: "id_nationality",
      },
    },
    place_birth: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "authors",
    timestamps: false,
  }
);

Author.belongsTo(Nationality, {
  foreignKey: "nationality",
  as: "Nationality",
});

const Writings = sequelize.define(
  "writings",
  {
    id_writing: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    tableName: "writings",
    timestamps: false,
  }
);

const Reader = sequelize.define(
  "readers",
  {
    id_reader: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    account_status: {
      type: DataTypes.ENUM("active", "suspended"),
      allowNull: false,
    },
  },
  {
    tableName: "readers",
    timestamps: false,
  }
);

const Loan = sequelize.define("loan", {
  id_loan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_reader: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    references: {
      model: "readers",
      key: "id_reader",
    },
    allowNull: false,
  },
  id_book: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    references: {
      model: "books",
      key: "id_book",
    },
  },
  loan_date: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  delivery_date: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("delivered", "not_delivered"),
    allowNull: false,
  },
});

// Relación muchos a muchos entre Books y Authors
Book.belongsToMany(Author, {
  through: Writings, // Nombre de la tabla intermedia (debe usar el modelo `Writings`)
  foreignKey: "id_book",
  as: "Author", // Alias en plural para acceder a los autores de un libro
});

Author.belongsToMany(Book, {
  through: Writings, // Nombre de la tabla intermedia
  foreignKey: "id_author",
  as: "Book", // Alias en plural para acceder a los libros de un autor
});

// En Loan.js
Loan.belongsTo(Book, { foreignKey: "id_book" });
Loan.belongsTo(Reader, { foreignKey: "id_reader", onDelete: "CASCADE" });

sequelize.sync();

module.exports = {
  Book,
  Author,
  Literary_genre,
  Nationality,
  Writings,
  Reader,
  Loan,
};
