import React, { useState, useEffect } from 'react';
// import Card from '../components/PCardSW.jsx';  // Ensure this is used or remove if not needed
import Calendar from '../components/CalendarSW.jsx'
import Profile from '../components/ProfileSW.jsx'
import Cards from '../components/CardsSW.jsx';
import Loader from '../components/LoaderSW.jsx';  // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className='flex h-max bg-[rgb(249,248,240)]'>
      {loading ? (
        <Loader />  // Show loader while loading
      ) : (
        <>
          <div className='w-3/4 flex flex-col bg-[rgb(249,248,240)]'>
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className='w-1/4'>
            <div className='flex flex-col justify-between'>
              <div style={{ marginTop: "-76px" }}>
                <Profile />
              </div>
              {/* <div>
                <Calendar/>
              </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
