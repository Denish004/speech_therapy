import React from 'react';
import SessionCardDS from './SessionCardDS.js'
const SessionsDS= () => {
    // Dummy data for static UI
    const Sessions = [
        { id: 1, date: '2024-08-24', time: '10:00 AM', status: 'Scheduled' },
        { id: 2, date: '2024-08-26', time: '02:00 PM', status: 'Scheduled' },
        { id: 3, date: '2024-08-20', time: '11:00 AM', status: 'Completed' },
    ];

    // const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date());

    return (
        <div className='ml-3'>
        {
            Sessions && Sessions.map((session)=>{
                return (
                    <SessionCardDS 
                    SessionId = {session.id}
                    SessionDate = {session.date}
                    SessionTime = {session.time}
                    SessionStatus = {session.status}/>
                );
            })
        }
        </div>
     
    );
};

export default SessionsDS;
