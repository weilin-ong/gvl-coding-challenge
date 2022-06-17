const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const { connectDB } = require('./models/');

const hostname = '127.0.0.1';
const PORT = 3001;

app.use(cors()).use(express.json()).use(router);

//one time
(async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening on http://${hostname}:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
