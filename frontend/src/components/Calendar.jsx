import React from 'react';
import '../styles/glassEffect.css'; // Import the custom CSS for the glass effect

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const daysInMonth = 31; // Number of days in the month

const generateCalendarDays = (daysInMonth) => {
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};

const Calendar = () => {
  const calendarDays = generateCalendarDays(daysInMonth);

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-md mx-auto glass-effect shadow-lg">
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">October 2020</h1>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-3 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-gray-900 dark:text-gray-100">
              <thead>
                <tr>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="p-2 text-center">
                      <p className="text-lg font-medium">{day}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(daysInMonth / 7) }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {daysOfWeek.map((_, dayIndex) => {
                      const dayNumber = rowIndex * 7 + dayIndex + 1;
                      return (
                        <td key={dayIndex} className="p-2">
                          <div className={`flex items-center justify-center w-full h-12 cursor-pointer ${dayNumber <= daysInMonth ? 'text-gray-900 dark:text-gray-100' : 'text-transparent'}`}>
                            {dayNumber <= daysInMonth ? (
                              <p className="text-xl font-medium">{dayNumber}</p>
                            ) : (
                              <p>&nbsp;</p>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-5 border-t border-gray-200">
          <div className="flex justify-center mt-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
