// import React, { useEffect, useState } from 'react';
// // import ProgressChart from './ProgressChart.js';
// import Messaging from './Messaging.js';

// const Dashboard = ({ patientId }) => {
//     const [patientData, setPatientData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//               console.log(patientId);
//               const response = await fetch(`http://localhost:3001/api/patients/${patientId}`);
//               const json = await response.json();
      
//               if (response.ok) {
//                 //   dispatch({ type: 'SET_PROPERTY', payload: json });
//                 console.log(json);
//                 setPatientData(json)
                
//               }
//             } catch (error) {
//               console.error("Error while fetching data:", error);
//             }
//           };
//         //   console.log("Details :", json);
//           fetchData();
//         }, [patientId]);
       

//     return (
//         <div>
//             {patientData ? (
//                 <>
//                     <h2>{patientData.name}'s Dashboard</h2>
//                     {/* <ProgressChart progress={patientData.progress} /> */}
//                     <Messaging feedback={patientData.feedback} patientId={patientId} />
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Dashboard;
import React from 'react';

// import ProgressChart from './ProgressChart';
import Messaging from './MessagingDS';
import Appointments from './AppointmentsDS';
// import { Scheduler } from "@aldabil/react-scheduler";
// import { ComplexNavbar } from '@material-tailwind/react';
import  ComplexNavbar  from './ComplexNavbarDS';
import  PatientCard from './PatientCardDS';
import Navbar from './NavbarAB';

const Dashboard = () => {
    return (
        <div className="container">
            {/* <ComplexNavbar/> */}
              <Navbar/>




              <PatientCard/>
          

  

            <h2 className="text-3xl font-bold mb-6">Patient Dashboard</h2>
            {/* <Scheduler 
  view="month"
  events={[
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2021/5/2 09:30"),
      end: new Date("2021/5/2 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021/5/4 10:00"),
      end: new Date("2021/5/4 11:00"),
    },
  ]}
/> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Therapy Progress</h3>
                    <ProgressChart />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Feedback</h3>
                    <Messaging />
                </div>
            </div> */}
            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                <Appointments />
            </div>
        </div>
    );
};

export default Dashboard;

