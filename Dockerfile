FROM node:10-alpine AS base
WORKDIR /app
COPY package.json ./package.json
COPY proxy ./proxy

FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install

FROM dependencies AS test
COPY . .
RUN  npm run lint

FROM base AS release
ENV NODE_ENV=production
EXPOSE 3000
COPY --from=dependencies ./app/prod_node_modules ./node_modules
COPY . .
ENTRYPOINT [ "npm", "run", "prod" ]