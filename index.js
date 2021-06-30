const express = require("express");
const helmet = require("helmet");
const path = require("path");
const emailRouter = require("./routes/email-routes");
const { Ports, HttpCodes, Limits } = require("./helpers/constants");
require("dotenv").config();

const PORT = process.env.PORT || Ports.default;

const app = express();
app.use(helmet());

// app.set('trust proxy', 1);

app.use(express.json({ limit: Limits.JSON }));

app.use(express.static("public"));

app.use(emailRouter);

app.use((req, res) => {
  res
    .status(HttpCodes.NOT_FOUND)
    .sendFile(path.join(__dirname, "public", "404.html"));
});

app.use((err, req, res, next) => {
  const status = err.status || HttpCodes.INTERNAL_SERVER_ERROR;
  res.status(status).json({
    status: status === HttpCodes.INTERNAL_SERVER_ERROR ? "fail" : "error",
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
