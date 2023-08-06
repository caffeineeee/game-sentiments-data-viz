import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const SentimentDistributionBarChart = ({ data }) => {

  // Group data by sentiment
  const groupedData = data.reduce((groups, item) => {
    const { sentiment } = item;
    if (!groups[sentiment]) {
      groups[sentiment] = 0;
    }
    groups[sentiment]++;
    return groups;
  }, {});

  const labels = Object.keys(groupedData);
  const sentimentCounts = Object.values(groupedData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sentiment Distribution',
        data: sentimentCounts,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count of sentiment',
        },
      },
    },
  };

  return (
    <div className='p-4'>
      <p className='text-sm text-center'>&#39;Sentiment&#39; Distribution Bar Chart</p>
      <Bar data={ chartData } options={ options } />
    </div>
  );
};

export default SentimentDistributionBarChart;
