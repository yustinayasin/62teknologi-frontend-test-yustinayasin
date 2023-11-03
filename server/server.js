import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;

app.use(cors());

app.use(express.json());

app.get("/yelp-data", async (req, res) => {
  try {
    const location = req.query.location || "New York";
    const categories = Array.isArray(req.query.categories)
      ? req.query.categories.join("&categories=")
      : req.query.categories || "";
    const sort_by = req.query.sort_by || "best_match";
    const limit = req.query.limit || 20;
    const term = req.query.limit || "";

    console.log(categories);

    const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
      location
    )}&categories=${categories}&sort_by=${encodeURIComponent(
      sort_by
    )}&limit=${encodeURIComponent(limit)}&tem=${encodeURIComponent(term)}`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey, // Replace with your Yelp API key
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/business-detail", async (req, res) => {
  try {
    const id = req.query.id || "";
    console.log(id);

    const url = `https://api.yelp.com/v3/businesses/${id}`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey, // Replace with your Yelp API key
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/business-reviews", async (req, res) => {
  try {
    const id = req.query.id || "";
    console.log(id);

    const url = `https://api.yelp.com/v3/businesses/${id}/reviews`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + apiKey, // Replace with your Yelp API key
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("Server error:", err);
});
