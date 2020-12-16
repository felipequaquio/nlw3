# Home
Application created for study the Javascript stack (Node.js, React and React Native)

This app was created to search for orphanages in a city using a map, see details of operation and register new orphanages.

Before running the application, duplicate each .env.example file (in the root folder, the backend folder and the web folder) and rename it to .env. Change all variables according your operational system and personal settings.

**Important: instructions for setting the environment variables are in each .env.example file. The variables must be the same as in the .env file in the project's root folder.**

**- NOTE: It is recommended to run each project, web interface and server, separately, with their own security and environment settings. Both are running in the same repository for example and study purposes.**

After setting the variables in the .env file, follow one of the steps bellow.

**1- Using Docker**

In this step, Docker and Docker Compose are required. To install Docker,
follow the steps in documentation links bellow:

**Docker**
https://docs.docker.com/get-docker/

**Docker Compose**
https://docs.docker.com/compose/install/

After install Docker, go to the root folder of project and run: **docker-compose up**

**2- Run manually**

**2.1- Server application**

* Go to the backend root folder and run the command **yarn install**
* After install the packages, run yarn dev

**2.2- Web application**

* Go to the web root folder and run the command **yarn install**
* After install the packages, run yarn start


