"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users_words extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_words.belongsTo(models.User, {
        foreignKey: "userId",
      });
      users_words.belongsTo(models.Word, {
        foreignKey: "wordId",
      });
    }
  }
  users_words.init(
    {
      userId: DataTypes.INTEGER,
      wordId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users_words",
    }
  );
  return users_words;
};
