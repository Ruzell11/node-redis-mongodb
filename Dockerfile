#Every step is caching if none of its items is changed there is no need to run the command again
#Base image
FROM node:18
# working directory
WORKDIR /server
# Current directory "."
COPY package.json .
#yarn or npm
RUN npm install
#optimization that's why copy first the package json
COPY . .
#build
RUN npm run build
# this port will let the other docker image know that this application is using that port
EXPOSE 3000

#command to run the application
CMD ["npm" , "start"]