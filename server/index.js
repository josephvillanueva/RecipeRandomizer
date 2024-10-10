// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors({ origin: "http://localhost:5173"}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY; // Access your API key

// Endpoint to fetch random recipes
app.get("/api/recipes/random", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching random recipe:", error);
    res.status(500).json({ error: "Error fetching random recipe" });
  }
});

// Endpoint to filter recipes by ingredients
app.get("/api/recipes/filter", async (req, res) => {
  const { ingredients } = req.query;

  // Check if ingredients were provided
  if (!ingredients) {
    return res.status(400).json({ error: "Ingredients query parameter is required." });
  }

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`
    );
    res.json(response.data); // Send the JSON response
  } catch (error) {
    console.error("Error fetching from the external API:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Error fetching filtered recipes" }); // Ensure you send JSON here
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
