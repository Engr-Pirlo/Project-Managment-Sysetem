import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
  labels,
  datasets: [
    {
      label: 'Line chart',
      data: [203,122,49,323,980],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

    {
      label: 'Line chart',
      data: [2303,122,494,3213,9280],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'blue)',
    },

    {
      label: 'Line chart',
      data: [2303,1242,459,7323,6980],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};







function LineCharts() {
  return (
    <div>
       <Line options={options} data={data} />
    </div>
  )
}

export default LineCharts