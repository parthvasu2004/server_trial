const mongoose = require("mongoose");

uri = "mongodb+srv://parthvasu2004_db_user:<db_password>@blsapi.lcoaoc0.mongodb.net/blsapi?retryWrites=true&w=majority";

const connectDB () => {
  return mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });
};

module.exports connectDB;
