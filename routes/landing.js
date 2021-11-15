const router = require("express").Router();

// configure a simple get request on the router
router.get("/", async (req, res) => {
  const userData = { message: "what up doe" };
  // send the data to the requester
  res.json(userData);
});

module.exports = router;
