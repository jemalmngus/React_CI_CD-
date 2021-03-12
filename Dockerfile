#Set the base image to node:12-alpine
FROM node:13.12.0-alpine As build

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# Prepare the container for building React
RUN npm install
RUN npm install react-scripts
# We want the production version
RUN npm run build
