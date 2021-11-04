const taskModel = require('../models/taskModel')

const validate = (text) => {
  if (typeof (text) === 'string') {
    return {
      err: {
        code: 'invalid_text', message: '"text" must be a string' } };
  }
};

const create = async ({text}) => {
  const result = await validate(text);
  if (result) {
    return result;
  }

  const exists = await taskModel.findByName(text);
  if (exists) {
    return {
      err: {
        code: 'invalid_task',
        message: 'Task already exists',
      }
    };
  }

  const search = await taskModel.create({text, key, date, status});
  return { search };
};

const getAll = async () => {
  const result = await taskModel.getAll();
  return result;
};

const getById = async (id) => {
  const product = taskModel.getById(id);
  return product;
};

const editById = async (id, {text, key, date, status}) => {
  const product = await taskModel.editById(id, {text, key, date, status});
  return product;
};

const deleteById = async (id) => {
  const product = taskModel.deleteById(id);
  return product;
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};