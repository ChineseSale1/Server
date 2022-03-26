
const mongoose = require("mongoose");
const winningSchema = mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "users" },
    item_id: { type: Number },
    winning_date: { type: Date, default: Date.now() }
})
const Winning=mongoose.model("winnings",winningSchema);
module.exports(Winning,winningSchema);