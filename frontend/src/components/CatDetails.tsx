import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatModel } from '../models/CatModel';
import { FindCat } from '../utilities/findCats';
import styles from './CatDetails.module.css'; // Import the CSS module

const CatDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [cat, setCat] = useState<CatModel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const data = await FindCat(`/cats/${id}`);
                console.log('Fetched cat data:', data); // Debugging statement
                setCat(data);
            } catch (error) {
                console.error('Error fetching cat details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCat();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!cat) {
        return <div>Cat not found</div>;
    }

    console.log('Rendering cat data:', cat); // Debugging statement

    return (
        <div>
            <h1>{cat.name}</h1>
            <div className={styles.catimage}>
                <img src={cat.image} alt={cat.name} style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
            <p>Age: {cat.age}</p>
            <p>Gender: {cat.gender}</p>
            <p>Price: {cat.price}kr</p>
            <p>Description: {cat.description}</p>
            <p>Stock: {cat.stock}</p>
            <p>Adoptable: {cat.adoptable ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default CatDetails;