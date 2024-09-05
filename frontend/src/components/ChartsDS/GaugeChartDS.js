import React, { useState } from "react";
// import { render } from "react-dom";
import GaugeChart from "react-gauge-chart";

const GaugeChartDS = () => {
//   const [name] = useState("React");

  return (
    <div>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={3}
        colors={["red", "orange", "green"]}
        arcWidth={0.3}
        percent={0.80}
        textColor={'dark-gray'}
        // hideText={true} // If you want to hide the text
      />
    </div>
  );
};

export default GaugeChartDS


