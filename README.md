# 💬 Mini message board
![browser view](https://i.imgur.com/sAtFsLp.png)

A lightweight message board made with [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://es.reactjs.org/), and [NodeJS](https://nodejs.dev/).

## 📚 Libraries and tools used
### Frontend
- [React](https://reactjs.org/): Frontend design
- [Axios](https://axios-http.com/): GET/POST requests with backend

### Backend
- [Node](https://nodejs.dev/): Backend environment.
- [Express](https://expressjs.com/es/): Requests management
- [Mongoose](https://mongoosejs.com/): MongoDB connection and object modeling
- [CORS](https://www.npmjs.com/package/cors): Library to allow [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Nodemon](https://www.npmjs.com/package/nodemon) *(dev)*: Library to hot reload the server on change

### Database
- [MongoDB](https://www.mongodb.com/): A NoSQL database

### Deployment
- [Docker](https://www.docker.com/): Project bundler in OS-level virtualization containers to work in any environment

## ⚙️ Run the app
Default ports:
- **Backend: `8000`**
- **Frontend: `3000`**
- **MongoDB: `27017`**
### Option 1 (recommended): 🐳 Docker
#### Download the source code
```
git clone https://github.com/alesbe/mini-message-board.git
cd mini-message-board
```

#### Run Docker Compose
```
docker-compose up
```

### Option 2: Run the project yourself
You'll need 3 different terminals, because each part works individually and does not support detached mode without docker.
#### 1.- Setup database
Download [mongodb](https://www.mongodb.com/) and start the process
```
mongod
```

#### 2.- Download the source code
```
git clone https://github.com/alesbe/mini-message-board.git
cd mini-message-board
```

#### 3.- Setup backend server
Go to `server` folder and install dependencies
```
cd server
npm install
```
Then, start the server
```
node server.js
```

#### 4.- Setup frontend
Go to project root folder and cd into `client`, then, install dependencies

```
cd client
npm install
```
Then, start the client
```
npm start
```
