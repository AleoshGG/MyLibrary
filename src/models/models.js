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
      defaultValue: "0000-00-00",
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
      defaultValue: 1,
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

const Writings = sequelize.define(
  "writings",
  {
    id_writing: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id_author",
      },
    },
    id_book: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "books",
        key: "id_book",
      },
    },
  },
  {
    tableName: "writings",
    timestamps: false,
  }
);

module.exports = {
  Book,
  Author,
  Literary_genre,
  Nationality,
  Writings,
};
