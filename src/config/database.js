const { default: mongoose } = require("mongoose");
const DB_STRING = "mongodb+srv://trinhsytuan:123456Tt@cluster0.gmc6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connection = async () => {
  try {
    const options = {
      dbName: "DBTest",
    };
    await mongoose.connect(DB_STRING, options);
  } catch (error) {
    console.log("ERRROR:>>>>", error);
  }
};
module.exports = connection;