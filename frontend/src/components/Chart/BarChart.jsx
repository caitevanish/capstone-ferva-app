import React, { useState } from 'react';
import { Chart as ChartJS, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement);

const BarChart = () => {
  const [chart, setChart] = useState([]);

  // var baseUrl = "https://"

  async function fetchData() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/projects/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setChart(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   const fetchData();
  // }, []);

  var data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Yearly Purchases',
        data: [600, 90, 200, 200, 1000, 1200, 200, 8000],
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
    // <div>
    //   <Bar
    //     data={{
    //       labels: [''],
    //       datasets: [
    //         {
    //           label: 'My First dataset',
    //           backgroundColor: 'rgb(255, 99, 132)',
    //           borderColor: 'rgb(255, 99, 132)',
    //           data: [0, 10, 5, 2, 20, 30, 45],
    //         },
    //       ],
    //     }}
    //     height={400}
    //     width={600}
    //     options={{}}
    //   />
    // </div>
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};
export default BarChart;
