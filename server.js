const express = require("express");
const { botBlocker } = require("./botevade");

const app = express();

app.set("trust proxy", 1); // Render sits behind a proxy
app.use(botBlocker);       // Check requests before serving the site
app.use(express.static("public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});