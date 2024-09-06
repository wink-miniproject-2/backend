'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Quiz.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // 자동으로 증가하도록 설정
      primaryKey: true,    // 기본키로 설정
      allowNull: false     // null 값 허용하지 않음
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: false     // null 값 허용하지 않음
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false     // null 값 허용하지 않음
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false     // null 값 허용하지 않음
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false
    },     // null 값 허용하지 않음
    number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Quiz',
    tableName: 'Quizzes', // 테이블 이름 설정 (기본값은 모델 이름의 복수형)
    timestamps: true      // createdAt, updatedAt 타임스탬프 추가
  });

  return Quiz;
};
