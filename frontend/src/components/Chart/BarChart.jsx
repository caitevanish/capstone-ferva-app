import React, { useState } from 'react';
import { Chart as ChartJS, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import { UserData } from './Data'; //this is from youtube example

ChartJS.register(BarElement);

//pass the data through chart component
const BarChart = ({ courses }) => {
  // const [userData, setUserData] = useState({
  //   labels: {data.labels},
  //   datasets: [
  //     {
  //       label: 'Users Gained',
  //       data: UserData.map((data) => data.userGain),
  //     },
  //   ],
  // });

  // function yearlyTotals(request):

  // var baseUrl = "https://"

  // async function fetchData() {
  //   try {
  //     let response = await axios.filter('http://127.0.0.1:8000/api/courses/', {
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //       },
  //     });
  //     setChart(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   const fetchData();
  // }, []);

  const chartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'], //different years from the courses table
    datasets: [
      {
        label: 'Yearly Investment',
        data: [600, 90, 200, 800, 3000, 1200, 8000, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} width={300} height={400} options={options} />
    </div>
  );
};
export default BarChart;
