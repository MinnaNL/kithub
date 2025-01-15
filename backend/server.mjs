import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import cats from './src/routes/catRoutes.mjs';

// Steg 2. Starta upp tillgång till .env filens konfiguration...
dotenv.config();

// Globala variabler...
const PORT = process.env.PORT || 5010;

// Steg 3. Få tag i express applikationen...
const app = express();

// Enable CORS
app.use(cors());

// Serve static files
const __dirname = path.resolve();
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/index.html'));
});

// Steg 4. Aktivera middleware...
app.use('/backend/cats', cats);

// Starta servern
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));