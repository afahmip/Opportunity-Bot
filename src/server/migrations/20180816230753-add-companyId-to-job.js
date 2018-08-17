'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  queryInterface.addColumn(
    'Jobs',
    'companyId',
    {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Companies',
        key: 'id',
        as: 'companyId'
      },
    },
  ),

  down: (queryInterface/*, Sequelize*/) =>
    queryInterface.removeColumn('Jobs', 'companyId')

};
