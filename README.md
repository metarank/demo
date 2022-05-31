# Metarank Demo

This is a demo outlining how you can use Metarank in real-world scenarios. The code showcases how you can utilize deployed Metarank instance in your web application and covers ranking results, sending feedback and analyzing response.

## Prerequisites

The demo project utilizes [Node.js](https://nodejs.org) for the backend and [ReactJS](https://reactjs.org/) for the frontend, so you must have [Node.js](https://nodejs.org/) installed in order to run the project.
We also use [Yarn](https://yarnpkg.com/) for package management (`npm i -g yarn` for quick install).

## Running using Docker

You can easily run the project with `docker-compose`:

* run `docker-compose build` to build the images
* run `METARANK_URL=SOME-URL MODEL_NAME=SOME-MODEL docker-compose up` to run the images

You can access the frontend application at `localhost:3000` when both containers are running.

## Running using yarn workspaces

Both frontend and api projects are wrapped in yarn workspace, so you can run both projects using one yarn command.

* run `yarn` in the project folder to install all dependencies
* run `npm run start` to start both projects simultaniously

You still need to provide the `METARANK_URL` environment variable, e.g. `METARANK_URL=http://localhost:8080 npm run start`

## Running projects separately

### install the packages in the `frontend` and `server` folders
* `cd frontend && npm i`
* `cd server && npm i`

### run the backend
* use `METARANK_URL` environment variable to provide the URL of your Metarank installation in the format `http://localhost:8080`
* use `MODEL_NAME` environment variable to specify the name of the Metarank model from your configuration file. By default it's `xgboost` as in the [Ranklens Demo](https://github.com/metarank/metarank/blob/master/src/test/resources/ranklens/config.yml)
* use `PORT` environment vvaraible to provide the port on which API will run. By default port 3001 is used
* `cd server && npm run start` to run application

### run the frontend
* `cd frontend && npm run start`. By default the frontend will run on port 3000