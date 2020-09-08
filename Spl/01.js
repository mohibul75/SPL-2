/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');
const path = require('path');
const db = require('./db/db');


const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

async function findAllRows() {
  const notes = await db.lesson.findAll({ raw: true });
  console.log(notes);
}
findAllRows();
