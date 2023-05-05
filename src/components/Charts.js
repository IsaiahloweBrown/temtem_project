import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Charts = styled.div`
width: "100px",
height: "200px",
`;




function MyComponent({ hp, sta, spd, atk, def, spatk, spdef }) {
  const data = {
    labels: ['HP', 'STA' , 'SPD', 'ATK', 'DEF', 'SPATK', 'SPDEF'],
    datasets: [
      {
        label: 'temtem stats',
        backgroundColor: '#fbd25a',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'red',
        hoverBorderColor: 'black',
        color: '#fbd25a',
        data: [hp, sta, spd, atk, def, spatk, spdef]
      }
    ]
  };
  
  const center = useMemo(() => ({ hp, sta, spd, atk, def, spatk, spdef }), []);

  console.log(center);

  return (
    <>
      <Charts>
      <h2>Stats</h2>
        <Bar
          data={data}
          width={50}
          height={30}
          options={{
            maintainAspectRatio: true
          }}
        />
      </Charts>
    </>
  );
}

export default React.memo(MyComponent);


