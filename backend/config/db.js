import mongoose from "mongoose";

export const connectDB = async () => {

  try{
    await mongoose.connect ("mongodb+srv://Tounga:<2NtgZFcsXkt1h6Rj>@cluster0.h94f1c9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("MongoDB connected Succesfully!")

  }catch (error){
    console.error("Error Connnecting To MongoDB" ,error);
  }

}