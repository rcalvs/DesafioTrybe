const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const taskController = require('./controllers/taskController')

app.use(cors());

// Parse request body to json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'Working' })
});

app.get('/connection', taskController.getAll);
app.post('/post', taskController.create);
app.delete('/delete/:id', taskController.deleteById);


app.listen(3001, () => console.log('App listening on port 3001!'));