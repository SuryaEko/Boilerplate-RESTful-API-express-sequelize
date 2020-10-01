module.exports = {
  Unauthorized: class Unauthorized extends Error {
    constructor(message = "", ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);

      this.name = "Unauthorized";
      // Custom debugging information
      this.message = message;
    }
  },
  BadRequest: class BadRequest extends Error {
    constructor(message = "", ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);

      this.name = "BadRequest";
      // Custom debugging information
      this.message = message;
    }
  },
  NotFound: class NotFound extends Error {
    constructor(message = "", ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);

      this.name = "NotFound";
      // Custom debugging information
      this.message = message;
    }
  },
  Forbidden: class Forbidden extends Error {
    constructor(message = "", ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);

      this.name = "Forbidden";
      // Custom debugging information
      this.message = message;
    }
  },
  getStatusCode(e) {
    if (e instanceof this.Unauthorized) {
      return 401;
    } else if (e instanceof this.BadRequest) {
      return 400;
    } else if (e instanceof this.Forbidden) {
      return 403;
    } else if (e instanceof this.NotFound) {
      return 404;
    } else if (e.message === "Validation error") {
      return 400;
    } else {
      return 500;
    }
  },
};
