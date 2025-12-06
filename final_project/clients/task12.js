const axios = require("axios");

axios.get("http://localhost:5000/author/Achebe")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
