FROM node:23-alpine

wORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install


COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000 

CMD ["npm","run", "start"]