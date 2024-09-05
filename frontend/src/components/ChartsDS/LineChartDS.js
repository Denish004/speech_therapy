import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export default function BasicLineChart() {
  const data = [
    { week: 'Week 1', score: 65 },
    { week: 'Week 2', score: 72 },
    { week: 'Week 3', score: 68 },
    { week: 'Week 4', score: 75 },
    { week: 'Week 5', score: 80 },
    { week: 'Week 6', score: 85 },
  ];

  return (
    <LineChart
      width={600}
      height={350}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" label={{ value: 'Weeks', position: 'insideBottom', offset: -7,dy:10 }} />
      <YAxis label={{ value: 'Scores', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="score" stroke="#4CAF52" dot={{ r: 5, dy:25 }} />
    </LineChart>
  );
}
