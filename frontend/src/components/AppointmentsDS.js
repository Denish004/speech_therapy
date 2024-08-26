import React from 'react';

const Appointments = () => {
    // Dummy data for static UI
    const appointments = [
        { id: 1, date: '2024-08-24', time: '10:00 AM', status: 'Scheduled' },
        { id: 2, date: '2024-08-26', time: '02:00 PM', status: 'Scheduled' },
        { id: 3, date: '2024-08-20', time: '11:00 AM', status: 'Completed' },
    ];

    const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date());

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
            {upcomingAppointments.length ? (
                <ul className="space-y-4">
                    {upcomingAppointments.map(app => (
                        <li key={app.id} className="p-4 border rounded-lg shadow-sm">
                            <p className="text-lg font-medium">{app.date} at {app.time}</p>
                            <p className="text-sm text-gray-500">{app.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No upcoming appointments.</p>
            )}

            <h3 className="text-xl font-semibold mt-8 mb-4">All Appointments</h3>
            {appointments.length ? (
                <ul className="space-y-4">
                    {appointments.map(app => (
                        <li key={app.id} className="p-4 border rounded-lg shadow-sm">
                            <p className="text-lg font-medium">{app.date} at {app.time}</p>
                            <p className="text-sm text-gray-500">{app.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No appointments found.</p>
            )}
        </div>
    );
};

export default Appointments;
