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

import Carousel1 from "../assests/caurosel-P1.png";
import Carousel2 from "../assests/caurosel-P2.png";
import Carousel3 from "../assests/caurosel-P3.png";

function Carousel() {
  return (
    <>
      <div className="pt-16">
        <img
          src={Carousel1}
          alt="My Image"
          className="w-full h-[52vh] object-cover"
        ></img>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded mb-3">
          <div className="p-5  ">
            <div className="text-lg font-semibold">
              
              Meet India’s only content workspace provider, CoInfluence
            </div>

            <div className="pt-3 ">
              <select className="border-solid border-2 rounded p-2">
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
              </select> 
              <select className="border-solid border-2 rounded ml-2 p-2">
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
              </select>
              <button className="bg-black rounded ml-3 text-white p-2 pr-2 pl-2">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
