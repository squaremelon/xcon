FROM mhart/alpine-node
WORKDIR /app
RUN npm install -g nodemon
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org && \
  npm install && npm ls
RUN mv /app/node_modules /node_modules
ADD . /app
ENV PORT 3000
EXPOSE 3000
CMD ["node", "./src/server.js"]