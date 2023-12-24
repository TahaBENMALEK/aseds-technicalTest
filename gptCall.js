const axios = require('axios');
require('dotenv').config();

async function api(content) {
  const promptMessage = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: content },
    ],
    max_tokens: 3000,
    temperature: 1
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', promptMessage, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    // Check if the error is due to rate limiting
    if (error.response && error.response.status === 429) {
      // Implement a retry mechanism (e.g., wait for 1 second and then retry)
      await new Promise(resolve => setTimeout(resolve, 1000));
      return api(content);
    }

    // Log the error for debugging purposes
    console.error(error);

    // Handle other types of errors or return a default value
    return "Error occurred";
  }
}

module.exports = { api };