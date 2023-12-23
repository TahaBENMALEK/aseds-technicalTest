require("dotenv").config()
const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/query', async (req, res) => {
  const { question } = req.body;

  try {
    // Query the ChatGPT API
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: question }],
    }, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Extract the answer
    const answer = response.data.choices[0].message.content;

    // Save the information to a CSV file
    const csvData = `${question},${answer}\n`;
    fs.appendFileSync('/app/data/data.csv', csvData);

    res.status(200).json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
