import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3773f5',
      borderColor: '#3773f5',
      borderCapStyle: 'butt',
      borderDash: [],
      BorderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      poinHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function BalanceChart() {
  return (
    <div>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  );
}

export default BalanceChart;
