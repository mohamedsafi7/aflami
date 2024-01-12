const jsonServer = require('json-server');
const express = require('express');
const multer = require('multer');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('movies.json'); // Assuming your JSON data is in a file named 'db.json'
const middlewares = jsonServer.defaults();
const app = express();

// Set up multer to save files to the 'pics' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'pics');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Use the json-server middlewares
app.use(middlewares);
app.use(jsonServer.bodyParser);

// Use the router with the upload middleware
app.post('/movies', upload.single('image'), (req, res, next) => {
  // Handle the file upload and save other form data to your database or perform necessary actions
  next();
});

// Use the json-server router
app.use(router);

const port = 3001;

app.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
