import React, { useState, useEffect } from 'react';
import Calendar from '../components/CalendarSW.jsx';
import Profile from '../components/ProfileSW.jsx';
import Cards from '../components/CardsSW.jsx';
import Loader from '../components/LoaderSW.jsx';
import TodoList from '../components/TodoSW.jsx';
import Navbar from '../components/NavbarAB.jsx'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
     {!loading && <Navbar/>}
    <div className='flex flex-col lg:flex-row h-full min-h-screen bg-[rgb(249,248,240)]'>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <div className='lg:w-3/4 w-full flex flex-col bg-[rgb(249,248,240)] p-4 space-y-4'>
            {/* Responsive Cards - Adjust to different screen sizes */}
            <Cards className='w-full'/>
            <Cards className='w-full'/>
            <Cards className='w-full'/>
          </div>
          <div className='lg:w-1/4 w-full flex flex-col items-center lg:items-start p-4'>
            <div className='flex flex-col justify-between w-full space-y-6'>
              <div className='mt-5 lg:mt-6 ml-0 lg:ml-10'>
                <Profile />
              </div>
              <div className='mt-5 lg:mt-12 ml-0 lg:ml-12 w-full'>
                <TodoList />
              </div>
              {/* Uncomment to add Calendar */}
              {/* <div className='mt-5 w-full'>
                <Calendar />
              </div> */}
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default App;
