const express = require("express");
const { fetchData } = require("../../Controllers/DataFetch/dataFetchController");
const router = express.Router();

// Route for fetching booking data
router.post("/fetch-data", fetchData);

module.exports = router;
