'use strict';

module.exports = (sequelize, DataTypes) => {

  const Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Company.associate = (models) => {
    Company.hasMany(models.Job, {
      foreignKey: 'companyId',
      as: 'jobs'
    })
  };

  return Company;
};