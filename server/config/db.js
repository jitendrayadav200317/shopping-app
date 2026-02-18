import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB);
    console.log("mongose connect ✅");
  } catch (error) {
    console.log(error);
  }
};
export default dbconnect;
