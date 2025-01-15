import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CatModel } from '../models/CatModel';
import Header from '../components/GeneralUI/Header';
import Footer from '../components/GeneralUI/Footer';
import styles from './CatDetails.module.css'; // Import the CSS module

const CatDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [cat, setCat] = useState<CatModel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/cats/${id}`);
                if (!response.ok) {
                    throw new Error('Cat not found');
                }
                const data = await response.json();
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
            <Header />
            <div className={styles.catDetails}>
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
                <Link to="/cats" className={styles.backLink}>Back to Cat List</Link>
            </div>
            <Footer/>)
        </div>
    );
};

export default CatDetails;