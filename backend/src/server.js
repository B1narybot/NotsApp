import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from '../config/db.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();  

//middleware 
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(5001, () => {
  console.log('Server is running on port', PORT);
});


