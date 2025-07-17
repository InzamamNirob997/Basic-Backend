const getMessage = (req, res) => {
  res.send("I am getting a request.");
};

const postMessage = (req, res) => {
  res.send("I am post request.");
};

module.exports = {
  getMessage,
  postMessage
};
