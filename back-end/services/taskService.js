const taskModel = require('../models/taskModel')

const validate = (text) => {
  if (typeof (text) === 'string') {
    return {
      err: {
        code: 'invalid_text', message: '"text" must be a string' } };
  }
};

const create = async ({task}) => {
  const { text } = task;
  console.log('bem vindo ao Service');
  console.log(text);
  console.log(task);
  
  // const result = await validate(text);
  // if (result) {
  //   return result;
  // }

  // const exists = await taskModel.findByName(text);
  // if (exists) {
  //   return {
  //     err: {
  //       code: 'invalid_task',
  //       message: 'Task already exists',
  //     }
  //   };
  // }

  const creatingTask = await taskModel.create({task});
  return creatingTask;
};

const getAll = async () => {
  const result = await taskModel.getAll();
  return result;
};

const getById = async (key) => {
  const product = taskModel.getById(key);
  return product;
};

const editById = async (key, {task}) => {
  const product = await taskModel.editById(key, {task});
  return product;
};

const deleteById = async (key) => {
  const product = taskModel.deleteById(key);
  return product;
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};