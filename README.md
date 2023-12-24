# ChatGPT Microservice

This Node.js microservice is designed to query the ChatGPT API using a user-inputted question, retrieve the answer, and store the information in a local CSV file.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
- [API Endpoint](#api-endpoint)
- [CSV Storage](#csv-storage)
## Prerequisites

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- Docker: [Download and Install Docker](https://www.docker.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatgpt-microservice.git
2. Navigate to the project directory:
    ```bash
   cd chatgpt-microservice
3. Install dependencies:
    ```bash
    npm install
## Usage
1. First create a file named .env in the root directory in this file add
    ```bash
    OPENAI_API_KEY=your_actual_api_key
- your_actual_api_key is the key getting from openai
2. To run the microservice locally:
    ```bash
    npm install
The microservice will be accessible at http://localhost:3000.

## Docker

- To run the Docker container:
    ```bash
    docker compose up

## API Endpoint

Send a POST request to the following endpoint to ask a question:

    "http://localhost:3000/query"

Include the question in the request body as a JSON object:

    {
    "question": "YourQuestionHere"
    }

Replace "YourQuestionHere" with the actual question you want to ask.

Example using curl:


    curl -X POST -H "Content-Type: application/json" -d '{"question": "YourQuestionHere"}' http://localhost:3000/query

## CSV Storage
The microservice stores the questions and answers in a CSV file named data.csv in data folder. Each entry is a new line in the format question : answer .

