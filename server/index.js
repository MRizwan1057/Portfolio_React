const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
// const PORT = process.env.PORT | 3030;
const userhRoute = require("./routes/user_routes");
const projectRoute = require("./routes/project_routes");
const authRoute = require("./routes/auth_routes");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://Rizwan:QqfvFSQIVactzvz5@cluster0.qn4z2xp.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((e) => {
    console.log("Error connecting server");
  });
app.use("/api/users", userhRoute);
app.use("/api/projects", projectRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app running on port ${process.env.PORT}`);
});
