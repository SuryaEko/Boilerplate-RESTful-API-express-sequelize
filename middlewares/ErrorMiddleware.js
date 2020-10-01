const ErrorMethod = require("../methods/ErrorMethod");

module.exports = (err, req, res, next) => {
  let body;
  if (err.message === "Validation error") {
    body = {
      success: false,
      message: err.message,
      fields: err.errors.map((item) => {
        delete item.instance;
        return item;
      }),
    };
  } else {
    body = {
      success: false,
      message: err.message,
    };
  }

  return res.status(ErrorMethod.getStatusCode(err)).send(body);
};
