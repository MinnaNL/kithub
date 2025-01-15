import { fetchData } from '../utilities/httpClient.mjs';

// Get all cats
export const getCats = async (req, res) => {
  try {
    const cats = await fetchData('cats');
    res.status(200).json({ success: true, data: cats });
  } catch (error) {
    console.error('Error in getCats:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get cat by ID
export const getCatById = async (req, res) => {
  const param = req.params.id;
  try {
    const cat = await fetchData(`cats/${param}`);
    res.status(200).json({ success: true, data: cat });
  } catch (error) {
    console.error('Error in getCatById:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};