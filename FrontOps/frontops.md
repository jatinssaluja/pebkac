# FrontOps

## Frontend Deployment

In order to deploy the frontend, I would use nginx server with react files. A docker file will start nginx instance to serve index.html and main.js. The `./client` directory contains docker file, and nginx-related configuration for the react front-end.

Additionally, I would draw upon another nginx server for path-based routing to the nginx server with react files, and API server. The configuration for nginx server, used for path-based routing, can be found inside `./nginx` directory.

## Changing the FQDN of the API (API_BASE_URL)

In order to change the value of `API_BASE_URL`, open `./nginx/Dockerfile`, and assign new value to environment variable `API_BASE_URL`.

## How would you handle new versions of the API?

Following are the ways to handle new versions of the API:

1) URI Versioning, where we version the URI using version indicators.

2) Media Type Versioning, where we version the representation of the resource.

In case of URI versioning, change the value of `API_BASE_URL` to point to the new version of the api.
