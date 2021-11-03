const taskService = require('../services/taskService')

const create = async (req, res) => {
  const {query, data} = req.body;
  const { err, response } = await taskService.create(query, data);
  if (err) return res.status(422).json({ err });
  return res.status(200).json(response);
};

const getAll = async (req, res) => {
  const result = await taskService.getAll();
  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
};