FROM mcr.microsoft.com/playwright:bionic
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i
COPY . .
CMD [ "npm", "run", "test" ]