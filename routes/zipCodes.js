const express = require('express');
const router = express.Router();

// Import classes
ZipCode = require('../classes/ZipCode');

router.get('/:zipCode', async function (req, res) {
   try{
       const zipCode = req.params.zipCode;
       const classZipCode = new ZipCode();
       const resZipCode = await classZipCode.getZipCodeDetails(zipCode);
       res.json(resZipCode);
   } catch (error) {
       console.log('error: ', error);
       res.status(404).send('404 - Not Found');
   }
});

module.exports = router;

