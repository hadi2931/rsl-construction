import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/60169092974"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M16 3C9.383 3 4 8.383 4 15c0 2.662.785 5.184 2.27 7.355L4 29l6.828-2.207C12.96 28.273 14.459 29 16 29c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.314 0-2.597-.343-3.707-.994l-.266-.156-4.043 1.305 1.32-3.946-.176-.281A8.93 8.93 0 0 1 7 15c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
