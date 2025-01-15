import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load mock data from JSON file
const catsDataPath = path.join(__dirname, '../data/db.json');
const catsData = JSON.parse(fs.readFileSync(catsDataPath, 'utf-8'));

// Get all cats
export const getCats = (req, res) => {
    res.json(catsData.cats);
};

// Get cat by ID
export const getCatById = (req, res) => {
    const catId = parseInt(req.params.id, 10);
    const cat = catsData.cats.find(c => c.id === catId);
    
    if (cat) {
        res.json(cat);
    } else {
        res.status(404).json({ message: 'Cat not found' });
    }
};