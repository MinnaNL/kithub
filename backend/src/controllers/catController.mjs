import { fetchData } from '../utilities/httpClient.mjs';


export const getCats = async (req, res) => {
    try {
        const result = await fetchData('cats');
        res.status(200).json ({ success: true, data: result });
        return;
    } catch (error) {
        console.error('Error in getCats:', error);
        res.status(500).json({success: false, message: error});
    }
};

export const getCatById = async (req, res) => {
    const param = req.params.id;

    try {
        const result = await fetchData(`cats/${param}`);
        res.status(200).json({ success: true, data: result });
    } catch (error) {   
        res.status(500).json({ success: false, message: error });
    }
};