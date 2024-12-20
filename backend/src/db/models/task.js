'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: DataTypes.UUID,
    task: DataTypes.STRING,
    user_id: DataTypes.UUID,
    board_id: DataTypes.UUID,
    phase_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
  });
  return Task;
};