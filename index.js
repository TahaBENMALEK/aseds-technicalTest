require("dotenv").config()
const express = require('express');
const fs = require('fs');
const { api } = require("./gptCall");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/test",(req,res)=>{
    res.send("taha")
})

app.post('/query', async (req, res) => {
  const { question } = req.body;

  api(question).then(rep=>{
    const csvData = `${question} : ${rep}\n`;
    fs.appendFileSync('./data/data.csv', csvData);
  }).catch(e=>{
    console.log(e)
    res.status(500).json({ error: 'Internal Server Error' });
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});