const Sequelize = require('sequelize');
const user = require('./user');
const product = require('./product')

const env = process.env.NODE_ENV || 'development'; // 개발하게 될땐 development 가 동작 배포할땐 production
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username ,
  config.password ,
  config
)

db.User = user;
db.Product = product;


Object.keys(db).forEach(modelName =>{
  if(db[modelName].associate){
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;