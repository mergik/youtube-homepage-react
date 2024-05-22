import React from 'react'
import CategoryContext from '../../../context/CategoryContext';

const Chip = () => {
    const { categoryResults, isLoading, error, categoryDisplay } = CategoryContext()
    
    // Display loading message or error message if needed
    if (isLoading) {
      return <p>Loading categories...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div className='absolute flex mt-3 left-3 right-3 overflow-hidden'>
        {categoryResults.map((category) => (
          <button key={category.id} className='font-bold text-sm text-nowrap bg-gray-800 text-white px-3 py-2 ml-3 rounded-xl'>
            {category.title}
          </button>
        ))}
      </div>
    );
}

export default Chip