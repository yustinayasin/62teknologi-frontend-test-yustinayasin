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
    const response = await fetch(
      "https://api.yelp.com/v3/businesses/search?location=New%20York&categories=&sort_by=best_match&limit=20",
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + apiKey, // Replace with your Yelp API key
        },
      }
    );

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
