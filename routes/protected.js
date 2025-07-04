const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

router.get("/", auth, (req, res) => {
    res.json("Welcome to the protected route, authenticated user!");
});

module.exports = router;
