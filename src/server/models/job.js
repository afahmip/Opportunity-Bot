'use strict';

module.exports = (sequelize, DataTypes) => {

  const Job = sequelize.define('Job', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING
    },
    desc: {
      type: DataTypes.STRING
    }
  });

  Job.associate = (models) => {
    Job.belongsTo(models.Company, {
      foreignKey: 'companyId',
      onDelete: 'CASCADE'
    })
  };

  return Job;
};