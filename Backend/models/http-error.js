class HttpError extends Error {
  constructor(errorCode, message) {
    this.code = errorCode;
    super(message);
  }
}
module.exports = HttpError;
