const mongoose = require("mongoose");

const UserMoveMapSchema = new mongoose.Schema(
    {
     UserId: {type: mongoose.Schema.Types.ObjectId, ref:"user" },
     MovieId: {type: mongoose.Schema.Types.ObjectId, ref: "movie"},
     time : { type: Number, default: "false" },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("UserMoveMap", UserMoveMapSchema);
  