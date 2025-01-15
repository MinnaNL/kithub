import React from 'react';
import CatDetails from '../components/CatDetails';

const CatPage: React.FC = () => {
  return (
    <div>
      <h1>Cat Details</h1>
      <CatDetails />
    </div>
  );
};

export default CatPage;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { CatDetailsModel } from '../models/CatDetailsModel';

// const CatPage: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const [cat, setCat] = useState<CatDetailsModel | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchCat = async () => {
//             try {
//                 const response = await fetch(`/api/cats/${id}`);
//                 const data = await response.json();
//                 setCat(data);
//             } catch (error) {
//                 console.error('Error fetching cat details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCat();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!cat) {
//         return <div>Cat not found.</div>;
//     }

//     return (
//         <div>
//             <h1>{cat.name}</h1>
//             <img src={cat.image} alt={cat.name} />
//             <p>Age: {cat.age}</p>
//             <p>Gender: {cat.gender}</p>
//             <p>Description: {cat.description}</p>
//             <p>Price: ${cat.price}</p>
//             <p>Stock: {cat.stock}</p>
//             <p>Available for Adoption: {cat.adoptable}</p>
//         </div>
//     );
// };

// export default CatPage;