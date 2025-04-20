FROM node:23-alpine

wORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000 

CMD ["node","dist/index.js"]