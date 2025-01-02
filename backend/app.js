const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const connectionString = process.env.MONGO_URI;
console.log(connectionString);
mongoose.connect(connectionString)
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Connection error:', err));

app.use(cors());
app.use(express.json());

const todo = require('./user.js');

app.get('/user', async (req, res) => {
    const todos = await todo.find();
    res.json(todos); 
});

app.post('/user/new', async (req,res) => {
    const newTask = await todo.create(req.body);
    res.status(201).json({newTask})
})

app.delete('/user/delete/:id', async(req,res)=>{
    const result = await
    todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});