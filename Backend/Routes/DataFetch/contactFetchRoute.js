const express = require("express");
const router = express.Router();
const { fetchContacts } = require("../../Controllers/DataFetch/contactsFetchController");

// Route to fetch contacts and export to Excel
router.post("/fetch-contacts", fetchContacts);

module.exports = router;
