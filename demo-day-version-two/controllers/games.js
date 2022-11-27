//controllers = instructionns


//controllers = instructionns


const cloudinary = require("../middleware/cloudinary");
const Game = require("../models/Game");
const Result = require("../models/Result");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const games = await Game.find({ user: req.user.id });
      res.render("profile.ejs", { games: games, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const games = await Game.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { games: games });
    } catch (err) {
      console.log(err);
    }
  },
  getGame: async (req, res) => {
    try {
      const game = await Game.findById(req.params.id);
      const result = await Result.find({game: req.params.id});
      res.render("Game.ejs", { game: game, user: req.user, result: result });
      
    } catch (err) {
      console.log(err);
    }
  },
  createGame: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Game.create({
        title: req.body.title,
        description: req.body.description,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        gameType: req.body.gameType,
        users: req.user.userName,
        location: req.body.location,
        dateAndTime: req.body.dateAndTime,
        user: req.user.id,
      });
      console.log("Game has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  joinGame: async (req, res) => {
    try {
      await Game.findOneAndUpdate(
        { _id: req.params.id },
        {
          //user: req.user.id
          //adds user twice if clicked more than once 
          $addToSet: { users: req.user.userName },
        }
      );
      console.log("users +1");
      res.redirect(`/Game/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteGame: async (req, res) => {
    try {
      // Find Game by id
      let game = await Game.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(game.cloudinaryId);
      // Delete Game from db
      await Game.remove({ _id: req.params.id });
      console.log("Deleted Game");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
  createResult: async (req, res) => {
    try {
      // Upload image to cloudinary
    

      await Result.create({
        game: req.params.id,
        user: req.user.id,
        userName: req.user.userName,
        points: req.body.points,
        assists: req.body.assists,
        rebounds: req.body.rebounds,
      });
      console.log("Result has been added!");
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  

};
