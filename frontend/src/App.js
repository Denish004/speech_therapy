import React, { useState, useEffect } from 'react';
import Card from './components/PCard.jsx';  // Ensure this is used or remove if not needed
import Calendar from './components/Profile.jsx';
import Cards from './components/Cards.jsx';
import Loader from './components/Loader.jsx';  // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className='flex h-max bg-blue-500'>
      {loading ? (
        <Loader />  // Show loader while loading
      ) : (
        <>
          <div className='w-5/6 flex flex-col bg-blue-500'>
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className='w-1/6'>
            <div className='flex flex-col justify-between'>
              <div style={{ marginTop: "-76px" }}>
                <Calendar />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
