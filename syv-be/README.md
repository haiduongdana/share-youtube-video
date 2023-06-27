# 1. Introduction: Youtube Video Sharing App
The application for backend api using Expressjs will have functions:
- Authentication API: Signup API, Login API
- Sharing YouTube videos API
- Viewing a list of shared videos API
- Real-time notifications for new video shares


# 2. Prerequisites

This project requires NodeJS (version 14.0.0 or later) and yarn or npm. Node and yarn/npm are really easy to install. To make sure you have them available on your machine, try running the following command.
```bash
yarn -v && node -v
# or
npm -v && node -v
```

# 3. Database Setup
Database Setup: Instructions for setting up the database, running migrations, and seeding data if necessary.

# 4. Installation & Configuration 
## First, clone the repository:

```bash
git clone git@github.com:haiduongdana/share-youtube-video.git
# or
git clone https://github.com/haiduongdana/share-youtube-video.git
```

## Enter the backend project:
```bash
cd syv-be/
```

## Create environment file:
```bash
cp .env.sample .env
```

Enter the .env variable:
```
NODE_ENV = dev

MONGO_URL_DEV = `url database setup in pre-step`
PORT_DEV = 8080
CLIENT_URL_DEV = http://localhost:3000
JWT_SECRET_DEV = <The jwt secret key>

MONGO_URL_PRODUCT = ''
PORT_PRODUCT = ''
CLIENT_URL_PRODUCT = ''
JWT_SECRET_PRODUCT = ''

JWT_LIFETIME = 1d
SESSION_SECRET = <The jwt secret key>

LOG_FILE = access.log
ACCESS_LOG_STREAM_INTERVAL = 1d

DEFAULT_PHOTO = default-photo.png

```


## Install dependencies:
```bash
npm install
# or
yarn install
```


# 5. Running the Application
Running the Application: How to start the development server, access the application in a web browser, and run the test suite.
## Start project
```bash
npm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Run test
```bash
npm test
# or
yarn test
```

# 6. Docker Deployment
Docker Deployment: Instructions for deploying the application using Docker, including building the Docker image and running containers 


# 7. Usage
Note: Assuming PORT_DEV = 8080
## Authentication API:
- Signup API. URL: http://localhost:8080/api/auth/signup

- Login API. URL: http://localhost:8080/api/auth/login

- Logout API. URL: http://localhost:8080/api/auth/logout

- Generate access token via refresh token API. URL: http://localhost:8080/api/auth/refresh


## Video API:
- Sharing YouTube videos API. URL: http://localhost:8080/api/video/add

- Viewing a list of shared videos: 
    + Get my shared videos API: http://localhost:8080/api/video/user/videos

    + Get all shared videos API: http://localhost:8080/api/video

- Viewing a video API: http://localhost:8080/api/video/:id

- Real-time notifications for new video shares: 


# 8. Troubleshooting
Troubleshooting: Common issues that may arise during setup and their potential solutions.
