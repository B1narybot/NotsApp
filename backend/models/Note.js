import mongoose from "mongoose";
//1- create schemea
//2- build module based on schema 

const notesSchema = new mongoose.Schema(
  {
    title: 
    { type: String, required: true },
    content:
    { type: String, required: true },
  },
  {timestamps: true} //createdAt , updatedAt
)

const Note = mongoose.model("Note", notesSchema);
export default Note ; //export the model to use it in other files