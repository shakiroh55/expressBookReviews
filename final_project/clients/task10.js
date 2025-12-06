const axios = require("axios");

function getAllBooks(cb) {
  axios.get("http://localhost:5000/")
    .then(res => cb(null, res.data))
    .catch(err => cb(err));
}

getAllBooks((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
