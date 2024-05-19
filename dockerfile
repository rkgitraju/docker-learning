# define parent image for project.
FROM node:latest 

# where we putting project.
COPY . .

# run nom install to install our project dependiecs.
RUN npm install

# make a port , by whch we will access our project.
EXPOSE 8081

#  Now run files
CMD [ "node" , "index.js"]
