# Neighborhood Map Project
---
#### _[Udacity](https://udacity.com/) Project_

This is a Single Page Application built with [React](https://reactjs.org/). This project was initially bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [How it Works?](#how-it-works)
- [Installation and Run](#installation-and-run)
- [Dependencies](#dependencies)
- [Build](#build)
- [Live Demo](#live-demo)
 
## How it works?
This app uses Google Maps API to display a Map, and FourSquare API to get restaurants info. 

You can click on a merker to get the details and filter the restaurants list.

## Installation and Run

To get started using the app:

* Clone/download the repo with `git clone https://github.com/wojtek-zajac/react-maps.git`
* `cd react-maps`
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* A live preview will open in your browser at `http://localhost:3000`

## Dependencies
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare API](https://developer.foursquare.com/)
* [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
* [sort-by](https://www.npmjs.com/package/sort-by)

## Build

* `npm build` or
* `yarn build`

This will build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. It also includes a [service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that the app loads from local cache on future visits.

## Live Demo

You can see the a live demo of the app [here](https://wojtek-zajac.github.io/react-maps/).
