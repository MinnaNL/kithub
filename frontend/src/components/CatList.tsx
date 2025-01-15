import React, { useEffect, useState } from 'react';
import { CatModel } from '../models/CatModel';
import { Link } from 'react-router-dom';

const CatList: React.FC = () => {
    const [cats, setCats] = useState<CatModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('http://localhost:5001/cats');
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error('Error fetching cats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Cat List</h1>
            <ul>
                {cats.map(cat => (
                    <li key={cat.id}>
                        <Link to={`/cats/${cat.id}`}>
                            <img src={cat.image} alt={cat.name} />
                            <h2>{cat.name}</h2>
                            <p>Age: {cat.age}</p>
                            <p>Gender: {cat.gender}</p>
                            <p>Price: ${cat.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatList;