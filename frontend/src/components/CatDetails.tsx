import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CatModel } from "../models/CatModel";
import CatCard from "./CatCard/CatCard";

const CatDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cat, setCat] = useState<CatModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/cats/${id}`
        );
        if (!response.ok) {
          throw new Error("Cat not found");
        }
        const data = await response.json();
        console.log("Fetched cat data:", data);
        setCat(data);
      } catch (error) {
        console.error("Error fetching cat details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [id]);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!cat) {
    return <h5>Cat not found</h5>;
  }

  console.log("Rendering cat data:", cat);

  return (
    <div>
      <Link to="/cats">Back to Cat List</Link>
      <CatCard cat={cat} showDetails />
    </div>
  );
};

export default CatDetails;
