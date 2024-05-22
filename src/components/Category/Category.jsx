// import React from 'react'
// import CategoryContext from '../../context/CategoryContext'

// const Category = () => {
//     const { categoryResults, isLoading, error, categoryDisplay } = CategoryContext()
    
//     // Display loading message or error message if needed
//     if (isLoading) {
//       return <p>Loading categories...</p>;
//     }

//     if (error) {
//       return <p>Error: {error.message}</p>;
//     }

//     return (
//       <div className='flex ml-5 overflow-hidden mt-16'>
//         {categoryResults.map((category) => (
//           <button key={category.id} className='font-bold text-sm text-nowrap bg-slate-500 px-3 py-1 mr-3 rounded'>
//             {category.title}
//           </button>
//         ))}
//       </div>
//     );
// }

// export default Category