const axios = require("axios");

axios.get("http://localhost:5000/isbn/1")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
