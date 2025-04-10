const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to AVA Maternity and Neuro-psychiatry Clinic API");
});

// Doctors route
app.get("/doctors", (req, res) => {
  res.json([
    {
      Name: "Dr. Amrita Sandhu",
      Qualifications: "MBBS, MS (Obstetrics and Gynaecology)",
      Specialty: "Maternity & Infertility Specialist, Vaginal rejuvinisation & Female care",
    },
    {
      Name: "Dr. Vasu Kalkat",
      Qualifications: "MBBS, MD (Psychiatry)",
      Specialty: "Brain & Mind Disorders , Male Fertility & Sexual Dysfunction",
    },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
