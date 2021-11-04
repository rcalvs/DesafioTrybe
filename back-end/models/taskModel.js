const getConnection = require('./connection');
const DB_NAME = process.env.DB_NAME;
const { ObjectId } = require('bson');

const create = async ({task}) => {
  const {text, status, key, date} = task;
  const db = await getConnection();
  const result = await db.collection(DB_NAME).insertOne({text, status, key, date});
  return { _id: result.insertedId, result };  
};

const findByName = async (text) => {
  const db = await getConnection();
  const result = await db.collection(DB_NAME).findOne({ text });
  return result;
};

const getAll = async () => {
  const db = await getConnection();
  const result = await db.collection(DB_NAME).find({}).toArray();
  return result;
};

const getById = async (key) => {
  // if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  const result = await db.collection(DB_NAME).findOne({ key: key });
  return result;
};

const editById = async (key, {task}) => {
  // if (!ObjectId.isValid(id)) return null;
  const {text, status, date} = task;
  const db = await getConnection();
  await db.collection(DB_NAME)
    .updateOne({ key: key }, { $set: { text, status, date } });
  return { id, task };
};

const deleteById = async (key) => {
  // if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  await db.collection(DB_NAME).deleteOne({ key: key });
};

module.exports = {
  create,
  findByName,
  getAll,
  getById,
  editById,
  deleteById
};