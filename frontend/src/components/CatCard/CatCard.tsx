import React from "react";
import { CatModel } from "../../models/CatModel";
import styles from "./CatCard.module.css"; // Import the CSS module

interface CatCardProps {
  cat: CatModel;
  showDetails?: boolean;
}

const CatCard: React.FC<CatCardProps> = ({ cat, showDetails = false }) => {
  return (
    <div className={styles.catCard}>
      <div className={styles.imageContainer}>
        <img src={cat.image} alt={cat.name} className={styles.catImage} />
      </div>
      <h4>{cat.name}</h4>
      <p>Age: {cat.age}</p>
      <p>Gender: {cat.gender}</p>
      <p>Price: {cat.price}kr</p>
      {showDetails && (
        <>
          <p>Description: {cat.description}</p>
          <p>Stock: {cat.stock}</p>
          <p>Adoptable: {cat.adoptable ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
};

export default CatCard;
