const getConnection = require('./connection');
const DB_NAME = process.env.DB_NAME;
const { ObjectId } = require('bson');

const create = async ({ text, key, date, status }) => {
  const db = await getConnection();
  const result = await db.collection(DB_NAME).insertOne({ text, key, date, status });
  return { _id: result.insertedId, query, data };  
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

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  const result = await db.collection(DB_NAME).findOne({ _id: ObjectId(id) });
  return result;
};

const editById = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  await db.collection(DB_NAME)
    .updateOne({ _id: ObjectId(id) }, { $set: { query, data } });
  return { id, query, data };
};

const deleteById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  await db.collection(DB_NAME).deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  create,
  findByName,
  getAll,
  deleteId
};