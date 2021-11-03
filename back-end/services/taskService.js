const taskModel = require('../models/taskModel')

const validate = (query) => {
  if (typeof (query) === 'string') {
    return {
      err: {
        code: 'invalid_query', message: '"query" must be a string' } };
  }
};

const create = async (query, data) => {
  const result = await validate(query);
  if (result) {
    return result;
  }

  const exists = await taskModel.findByName(name);
  if (exists) {
    return {
      err: {
        code: 'invalid_query',
        message: 'Query already exists',
      }
    };
  }

  const search = await taskModel.create(query, data);
  return { search };
};

const getAll = async () => {
  const result = await taskModel.getAll();
  return result;
};

module.exports = {
  create,
  getAll,
};