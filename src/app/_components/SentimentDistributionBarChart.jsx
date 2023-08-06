'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const SentimentDistributionBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://caxxels.github.io/test-json/test.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const getSentimentCounts = () => {
    const sentimentCounts = {
      Positive: 0,
      Neutral: 0,
      Negative: 0,
    };

    data.forEach(item => {
      const sentiment = item.sentiment;
      sentimentCounts[sentiment]++;
    });

    return Object.values(sentimentCounts);
  };

  const labels = ['Positive', 'Neutral', 'Negative'];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Game Sentiment Analysis',
        data: getSentimentCounts(),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
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
      x: {
        title: {
          display: true,
          text: 'sentiment',
        }
      },
    },
  };

  return (
    <>
      <p className='text-sm text-center'>&#39;Sentiment&#39; Distribution Bar Chart</p>
      <Bar data={ chartData } options={ options } />
    </>
  );
};

export default SentimentDistributionBarChart;