const getConnection = require('./connection');

const create = async ({ query, data }) => {
  const db = await getConnection();
  const result = await db.collection('trybeDesafio').insertOne({ query, data });
  return { _id: result.insertedId, query, data };  
};

const findByName = async (query) => {
  const db = await getConnection();
  const result = await db.collection('trybeDesafio').findOne({ query });
  return result;
};

const getAll = async () => {
  const db = await getConnection();
  const result = await db.collection('trybeDesafio').find({}).toArray();
  return result;
};

module.exports = {
  create,
  findByName,
  getAll,
};