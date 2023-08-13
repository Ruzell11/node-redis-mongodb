#Every step is caching if none of its items is changed there is no need to run the command again
#Base image
FROM node:18
# working directory
WORKDIR /app
# Current directory "."
COPY package.json .
#yarn or npm
ARG SERVER
RUN if [ "$SERVER" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi
#optimization that's why copy first the package json
COPY . .

#environment variables
ENV PORT 3000

#build
RUN npm run build
# this port will let the other docker image know that this application is using that port
EXPOSE ${PORT}

#command to run the application
#will ovveride in yml
CMD ["npm" , "start"]

#production
# CMD ["npm" , "start"]dd