import React from 'react';

const SessionCardDS = ({ sessionId, therapyStartDate, numberOfWeeks, therapyTitles }) => {
  return (
    <div className="bg-gradient-to-br border-t-8 border-t-indigo-900 from-green-50 via-fuchsia-50 to-purple-50 border border-gray-200 rounded-xl shadow-lg p-6 m-6 transition-transform transform hover:scale-105 hover:from-yellow-50 hover:via-fuchsia-50 hover:to-purple-100 hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* <h3 className="text-2xl font-bold text-purple-700 mb-4">Session ID: x{sessionId}</h3> */}
          <div className="text-gray-800 space-y-3">
            <p className="text-lg">
              <span className="font-semibold text-purple-800">Therapy Start Date:</span>{' '}
              <span className="font-medium">{new Date(therapyStartDate).toLocaleDateString()}</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-purple-800">Number of Weeks:</span>{' '}
              <span className="font-medium">{numberOfWeeks}</span>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-purple-800 mb-3">Therapy Titles</h4>
          <ul className="space-y-4">
            {therapyTitles.length > 0 ? (
              therapyTitles.map((titleObj, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-lg shadow-md transform hover:scale-105 hover:bg-purple-300 transition duration-300 ease-in-out"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-gray-900">
                      <span className="font-semibold">Week {titleObj.week}:</span> {titleObj.title}
                    </div>
                    {titleObj.progress !== undefined && (
                      <div className="w-1/3 ml-4">
                        <div className="w-full bg-gray-300 rounded-full h-4">
                          <div
                            className="bg-green-500 h-4 rounded-full"
                            style={{ width: `${titleObj.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-green-600 mt-1 block text-right">
                          {titleObj.progress}% Complete
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No therapy titles available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SessionCardDS;