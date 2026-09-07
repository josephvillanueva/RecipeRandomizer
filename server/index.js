// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(cors({ origin: "http://localhost:5173"}));
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", apiLimiter);

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.get("/api/recipes/random", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/random",
      { params: { apiKey: API_KEY } }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching random recipe:", error.response?.status || error.code || error.message);
    res.status(502).json({ error: "Error fetching random recipe" });
  }
});

app.get("/api/recipes/filter", async (req, res) => {
  const { ingredients } = req.query;

  if (typeof ingredients !== "string" || !ingredients.trim()) {
    return res.status(400).json({ error: "Ingredients query parameter is required and must be a string." });
  }

  if (ingredients.length > 200) {
    return res.status(400).json({ error: "Ingredients query parameter is too long." });
  }

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      { params: { ingredients, apiKey: API_KEY } }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from the external API:", error.response?.status || error.code || error.message);
    res.status(502).json({ error: "Error fetching filtered recipes" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
