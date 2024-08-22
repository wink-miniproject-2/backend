const express = require("express");
const router = express.Router();
const pushController = require("../controllers/push.controller");
const solveController = require("../controllers/solve.controller");
const hintController = require("../controllers/hint.controller");

router.get("/push", pushController.push);
router.post("/solve", solveController.solve);
router.get("/hint", hintController.hint);

module.exports = router;