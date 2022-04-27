const router = require("express").Router();
const verify = require("./verifyToken");
router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first post",
      description: "Random data you cant access without login",
    },
  });
});

module.exports = router;
