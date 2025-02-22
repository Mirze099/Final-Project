import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mir2005mirzeyev:mirze2005@finalproject.9wire.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  });
