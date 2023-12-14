<h1 align="center">Mindfulness - Mental Health Assessment</h1>
<div align="center"><img src="./client/src/assets/images/logo.png" width="200px" height="200px"/></div>
<div align="center">Mindfulness is a web app designed for students to assess their mental health status. It utilizes a machine learning model, powered by Jupyter Notebook, to provide personalized mental health suggestions based on user responses to a 20-question MCQ assessment. The app also integrates with the OpenAI API for real-time recommendation generation using ChatGPT. Users can save their assessment data, view their mental health status, and access personalized recommendations in the profile section.</div>

## Tech Stack

- **React:** Frontend framework for building user interfaces.
- **Auth0:** Authentication and authorization management.
- **TailwindCSS:** For styling the components.
- **OpenAI:** Integration for real-time recommendation generation.
- **PostgreSQL:** Database for storing user data.
- **Django:** Backend framework for building the server side.
- **Jupyter Notebook:** Used for training the machine learning model.

## Getting Started

### Prerequisite

- Node.js (https://nodejs.org/) installed on your machine.
- Python and Django installed for the backend.

### Installation

0. Clone the repository:
```bash
git clone https://github.com/singodiyashubham87/Mindfulness.git
cd Mindfulness
```
#### Frontend

1. Navigate to `client` directory:
```bash
cd client
```
   
3. Install dependencies:
```bash
npm install
```
3. Edit the .env file and add your Auth0 & OpenAi Credentials in the placeholders:
```bash
VITE_AUTH0_DOMAIN="AUTH0_DOMAIN"
VITE_AUTH0_CLIENT_ID="AUTH0_CLIENT_ID"
VITE_AUTH0_REDIRECT_URL="AUTH0_REDIRECT_URL"
VITE_OPENAI_API_KEY="OPENAI_API_KEY"
```
4. Start the frontend app server:
```bash
npm run dev
  ```

#### Backend

1. Navigate to `server` directory:
```bash
cd server
```
   
2. Create and source a virtual environment:
```bash
python -m venv venv
source venv/bin/activate
```
3. Install required modules:
```bash
pip install -r requirements.txt
```
4. Start the backend app server:
```bash
python manage.py runserver
  ```

## Features

+ **Mental Health Assessment:** Conduct a comprehensive 20-question MCQ test for mental health evaluation.
+ **Personalized Suggestions:** Receive machine learning-driven, personalized mental health suggestions based on assessment responses.
+ **Real-time Recommendations:** Access real-time, dynamic recommendations using ChatGPT API through OpenAI.
+ **Data Storage:** Securely store assessment data in the PostgreSQL database for future reference.
+ **User Profile:** View mental health status and personalized recommendations in the user profile section.
+ **User Authentication:** Implement secure user authentication and authorization using Auth0.

## Contributors

<div>
   <a href="https://github.com/singodiyashubham87/Mindfulness/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=singodiyashubham87/Mindfulness"/>
   </a>
</div>

## License

This project is licensed under the [MIT License](LICENSE).

## Support

If you find this project useful, please consider supporting it by starring the repository.
