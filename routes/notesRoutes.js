import express from "express";
const app = express();

const router = express.Router();

app.arguments("/api/notes")

router.get("/", (req, res) => {
 res.status(200).send("you just created notes");
}); 

router.post("/", (req, res) => {
  res.status(201).json({ message:"Note Created succesfully!"});
 }); 

 router.put("/:id", (req, res) => {
  res.status(200).json({ message:"Note Updated succesfully"});
 }); 

 router.delete("/:id", (req, res) => {
  res.status(200).json("Note Deleted succesfully");
 }); 


export default router; 
