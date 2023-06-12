const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Velocidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Altura: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Peso: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
};
