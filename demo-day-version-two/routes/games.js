const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const path = require("path");
const gamesController = require("../controllers/games");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, gamesController.getGame);

router.post("/createGame", upload.single("file"), gamesController.createGame);

router.put("/joinGame/:id", gamesController.joinGame);



router.delete("/deleteGame/:id", gamesController.deleteGame);

router.post("/createResult/:id", gamesController.createResult);

// router.put("/likeResult/:id", gamesController.likeResult);


module.exports = router;

//getGame
//createGame
//joinGame
//deleteGame

