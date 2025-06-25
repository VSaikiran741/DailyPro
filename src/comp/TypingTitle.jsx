// import React, { useEffect, useState } from 'react';

// const TypingTitle = ({ text = "Welcome to My Web Page", speed = 100 }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       index++;
//       if (index === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval); // Cleanup
//   }, [text, speed]);

//   return (
//     <h1 className="text-4xl font-bold text-center mt-10 typing-effect">
//       {displayedText}
//       <span className="blinking-cursor">|</span>
//     </h1>
//   );
// };

// export default TypingTitle;
