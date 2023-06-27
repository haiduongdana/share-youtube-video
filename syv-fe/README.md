# 1. Introduction: Youtube Video Sharing App
The application for frontend using nextjs have functions:
- Signup, Login
- Sharing YouTube videos
- Viewing a list of shared videos
- Real-time notifications for new video shares


# 2. Prerequisites

This project requires NodeJS (version 14.0.0 or later) and yarn or npm. Node and yarn/npm are really easy to install. To make sure you have them available on your machine, try running the following command.
```bash
yarn -v && node -v
# or
npm -v && node -v
```

# 3. Installation & Configuration 
## First, clone the repository:

```bash
git clone git@github.com:haiduongdana/share-youtube-video.git
# or
git clone https://github.com/haiduongdana/share-youtube-video.git
```

## Enter the frontend project:
```bash
cd syv-fe/
```

## Create environment file:
```bash
cp .env.sample .env
```

Enter the .env variable:
```
NEXT_PUBLIC_BASE_URL = 'http://localhost:8080/api'

NEXT_PUBLIC_YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos'

NEXT_PUBLIC_YOUTUBE_API_KEY = <The youtubee API key>

NEXT_PUBLIC_SERVER_URL = 'http://localhost:8080'
```


## Install dependencies:
```bash
npm install
# or
yarn install
```


# 4. Running the Application
## Start project
```bash
npm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## To see all components with storybook:
```bash
npm storybook
# or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6000) with your browser to see the storybook.


## Run test
```bash
npm test
# or
yarn test
```

# 5. Docker Deployment
Docker Deployment: Instructions for deploying the application using Docker, including building the Docker image and running containers 


# 6. Usage
The application will have functions:
- Signup: User can sign up an account. URL: http://localhost:3000/signup

- Login: Login to system. URL: http://localhost:3000/login

- Viewing a list of shared videos: URL: http://localhost:3000

- Sharing YouTube videos: 

- Real-time notifications for new video shares: 


# 7. Troubleshooting
Troubleshooting: Common issues that may arise during setup and their potential solutions.
