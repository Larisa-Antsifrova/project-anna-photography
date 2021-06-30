const express = require("express");
const helmet = require("helmet");
const path = require("path");
const emailRouter = require("./routes/email-routes");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());

app.use(express.json());

app.use(express.static("public"));

app.use(emailRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    status: status === 500 ? "fail" : "error",
    code: status,
    message: err.message,
  });
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
