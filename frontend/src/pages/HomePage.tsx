import React from 'react';
import CatList from '../components/CatList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Cat Adoption Service</h1>
            <CatList />
        </div>
    );
};

export default HomePage;