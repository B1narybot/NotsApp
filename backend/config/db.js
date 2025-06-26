import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    await mongoose.connect (process.env.MONGO_URI);
    console.log("MongoDB connected Succesfully!")

  }catch (error){
    console.error("Error Connnecting To MongoDB" ,error);
    process.exit(1)
  }

}