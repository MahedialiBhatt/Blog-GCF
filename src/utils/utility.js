require("dotenv").config();

function writeResponse(err, data, res) {
  if (err) {
    res.status(err.code && Number.isInteger(err.code) ? err.code : 500);
    return res.json({
      status: "error",
      message: err.message,
    });
  }
  res.status(200);
  const response = {
    status: "Success",
    data: data,
  };
  return res.json(response);
}

function invoker(promise) {
  return promise
    .then((data) => {
      return [data, null];
    })
    .catch((err) => {
      return [null, err];
    });
}

module.exports = {
  writeResponse,
  invoker,
};
