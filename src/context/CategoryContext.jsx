import React, { useState, useEffect } from "react";

const CategoryContext = () => {
  const [categoryResults, setCategoryResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);
  const categoryDisplay = async () => {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videoCategories?&part=snippet&h1=en_GB&regionCode=ke&key=${
          import.meta.env.VITE_APIKEY
        }`
      );
      const data = await response.json();

      const categoryData = data.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
      }));
      setCategoryResults(categoryData);
    } catch (error) {
      console.error("ERROR FETCHING DATA FROM YOUTUBE API!", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetch (success or failure)
    }
  };
  useEffect(() => {
    categoryDisplay(); // Fetch categories on component mount
  }, []);
  return { categoryResults, isLoading, error, categoryDisplay };
};

export default CategoryContext;
