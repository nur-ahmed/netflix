const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const listRoute = require("./routes/lists");
const movieRoute = require("./routes/movies");
const timeRoute = require("./routes/time");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(cors({
  origin: ["http://localhost:4000", "http://localhost:3000"]
}));
app.use(express.json());

app.use("/api/movies", movieRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/lists", listRoute);
app.use("/api/times", timeRoute);



app.listen(8800, () => {
  console.log("Backend server is running!");
});
