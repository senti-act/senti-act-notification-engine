const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
	res.status(200).json({ "test": "It Works" });
});

module.exports = router