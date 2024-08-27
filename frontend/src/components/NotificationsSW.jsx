import React, { useState } from 'react';

const NotificationsSW = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="flex w-30 shadow-lg rounded-lg" style={{ width: '271px' }}>
        <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
          {/* Notification Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white fill-current"
            viewBox="0 0 16 16"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              d="M8 16c1.105 0 2-.895 2-2H6c0 1.105.895 2 2 2zm6-6V8c0-3.519-2.613-6.432-6-6.92V1a1 1 0 10-2 0v.08C4.613 1.568 2 4.481 2 8v2l-.84 2.52a1 1 0 00.175.876C1.755 13.68 2 14 2.418 14h11.164c.418 0 .663-.32.683-.604a1 1 0 00.175-.876L14 10z"
            ></path>
          </svg>
        </div>
        <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
          <div>Success alert</div>
          <button onClick={handleClose}>
            {/* Close Notification Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              viewBox="0 0 16 16"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default NotificationsSW;
