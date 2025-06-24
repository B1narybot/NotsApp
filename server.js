import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.get("/api/notes", (req, res) => {
  res.send("ÿou got 5 notes");
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
