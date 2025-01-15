import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import cats from './src/routes/catRoutes.mjs';


dotenv.config();


const PORT = process.env.PORT || 5010;


const app = express();

app.use(express.json());
app.use(cors());


// Steg 4. Aktivera middleware...
app.use('/backend/cats', cats);

// Starta servern
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));