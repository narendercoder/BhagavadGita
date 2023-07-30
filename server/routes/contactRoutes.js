const express = require("express");
const { contact } = require("../controller/contactControllers.js");

const router = express.Router();

router.post("/", contact);

module.exports = router;