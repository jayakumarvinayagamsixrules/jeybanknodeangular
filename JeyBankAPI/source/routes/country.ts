/** source/routes/country.ts */
import express from 'express';
import country from '../controllers/country';
const router = express.Router();

router.get('/country', country.getCountries);
export = router;