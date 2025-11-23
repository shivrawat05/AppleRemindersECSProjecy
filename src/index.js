import express from "express";
import reminderRoutes from "../src/routes/reminderRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Use reminder routes
app.use("/reminders", reminderRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
