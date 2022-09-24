const mongoose = require("mongoose");

const uri =
  "mongodb+srv://user_dessana:alves_dessana@cluster0.hdqm1kk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },

  nome: String,
  produtora: String,
  atores: String,
  ano: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = {
  UserModel,
};
