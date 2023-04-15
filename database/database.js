import Sequelize from 'sequelize';

export const sequelize = new Sequelize('portafolio_mod7', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
})