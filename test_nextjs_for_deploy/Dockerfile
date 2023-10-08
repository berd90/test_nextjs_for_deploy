FROM node:18-alpine

ARG WORKDIR="/next_test"

COPY . $WORKDIR/
WORKDIR $WORKDIR
RUN npm install --force
RUN npm run build

USER $USER

CMD ["npm", "run", "start"]
