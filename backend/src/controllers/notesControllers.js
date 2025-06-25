export function getAllNotes (req, res)  {
  res.status(200).send("you just created notes")};


export function createNote  (req, res){
  res.status(201).json({ message:"Note Created succesfully!"});
 }
 
 export function UpdateNote  (req, res) {
  res.status(200).json({ message:"Note Updated succesfully"});
 }

 export function DeleteNote  (req, res) {
  res.status(200).json({ message: "Note Deleted succesfully"});
 }

