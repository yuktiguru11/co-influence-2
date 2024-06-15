// // Carousel.js

// import React, { useState, useEffect } from 'react';

// const Carousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Auto-advance every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative overflow-hidden">
//       <div className="absolute inset-0 flex">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`w-full transition-opacity duration-500 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
//         onClick={prevSlide}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
//         onClick={nextSlide}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;
