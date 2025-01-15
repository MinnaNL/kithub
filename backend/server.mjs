import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import cats from './src/routes/cat-routes.mjs'; // Correct the file path

dotenv.config();

const PORT = process.env.PORT || 5021; // Set the port to 5021

const app = express();

app.use(express.json());
app.use(cors());

// Serve static files
const __dirname = path.resolve();
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// Use the cats router for /api/cats endpoint
app.use('/api', cats);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));