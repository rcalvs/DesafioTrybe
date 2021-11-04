const taskService = require('../services/taskService')

const create = async (req, res) => {
  const {text, key, date, status} = req.body;
  const { err, result } = await taskService.create(text, key, date, status);
  if (err) return res.status(422).json({ err });
  return res.status(200).json(result);
};

const getAll = async (req, res) => {
  const result = await taskService.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await taskService.getById(id);
  if (!result) {
    return res.status(422).json({ 
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      } });
  }
  return res.status(200).json(result);
};

const editById = async (req, res) => {
  const { id } = req.params;
  const { text, key, date, status } = req.body;
  const { err, result } = await taskService.editById(id, text, key, date, status);
  if (err) return res.status(422).json({ err });
  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await taskService.getById(id);
  if (!result) {
    return res.status(422).json({ err:
      { code: 'invalid_data', message: 'Wrong id format' } });
  }
  await taskService.deleteById(id);
  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};