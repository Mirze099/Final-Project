require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/coins/list", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.get("/api/coins/markets", async (req, res) => {
  const { vs_currency, ids, order, per_page, page } = req.query;
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets`,
      {
        params: {
          vs_currency,
          ids,
          order,
          per_page,
          page,
          sparkline: false,
          price_change_percentage: "1h,24h,7d", // Düzgün parametri düzəltdik
        },
      }
    );

    console.log("Backend-dən gələn Coin məlumatları:", response.data); // Debug üçün

    res.json(response.data);
  } catch (error) {
    console.error("Backend error:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.get("/api/coins/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      {
        params: {
          localization: false,
          tickers: false,
          market_data: true, // Bura əsasdır!
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      }
    );

    console.log("Backend-dən gələn Coin məlumatları:", response.data); // Debug
    res.json(response.data);
  } catch (error) {
    console.error("Backend error:", error.message); // Səhvləri konsolda göstər
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search`,
      { params: { query } }
    );
    res.json(response.data.coins);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir`);
});
