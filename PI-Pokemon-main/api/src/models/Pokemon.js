const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
};
