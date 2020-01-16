const express = require("express");
const path = require("path");
const historyApiFallback = require("connect-history-api-fallback");
const compression = require("compression");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(compression());

app.get("/healthcheck", async (req, res) => {
  try {
    res.json({ isHealthy: true });
    res.end();
  } catch (error) {
    console.log("HealthCheck Error: ", error);
    res.end();
  }
});

app.use(historyApiFallback());

app.use(
  express.static(path.join(__dirname, "../dist"), {
    maxAge: "1d",
    setHeaders: res => {
      res.setHeader("ETag", 20200116);
    }
  })
);

app.get("*", (req, res) => {
  res.sendFile("../dist/index.html", { root: __dirname });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`> Starting prod server on port ${PORT}`);
});
