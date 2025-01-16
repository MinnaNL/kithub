import React from "react";
import styles from "./WelcomeCard.module.css"; // Correct the CSS module import

interface CardProps {
  intro: string;
}

const WelcomeCard: React.FC<CardProps> = ({ intro }) => {
  return (
    <div className={styles.Card}>
      <img
        src="https://dbw3zep4prcju.cloudfront.net/animal/0f0a855d-0787-479f-8d36-e1bbfe4d92b7/image/f8919461-052f-4503-b141-ca0bfde13b54.jpg?versionId=agHUI25xuKwcwfBz_lCGPcnP2nNA0.Yh&bust=1732217049&width=1080"
        alt="Welcome"
        className={styles.Image}
      />
      <p>{intro}</p>
    </div>
  );
};

export default WelcomeCard;
