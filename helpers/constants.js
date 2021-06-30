const HttpCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

const Ports = {
  default: 3000,
};

const Limits = {
  JSON: 10000,
};

module.exports = { HttpCodes, Ports, Limits };
