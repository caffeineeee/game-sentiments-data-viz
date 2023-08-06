import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const SentimentDistributionBarChart = ({ data }) => {

  const getSentimentCounts = () => {

    const sentimentCounts = {};

    data.forEach(item => {
      const sentiment = item.sentiment;
      if (sentimentCounts[sentiment]) {
        sentimentCounts[sentiment]++;
      } else {
        sentimentCounts[sentiment] = 1;
      }
    });

    return Object.values(sentimentCounts);
  };

  const labels = ['Positive', 'Neutral', 'Negative', 'Irrelevant'];

  const getSentimentLabels = () => {
    const sentimentLabels = {};

    data.forEach(item => {
      const sentiment = item.sentiment;
      sentimentLabels[sentiment] = sentiment;
    });

    return Object.values(sentimentLabels);
  };

  const chartData = {
    labels: labels,
    // labels: getSentimentLabels(),
    datasets: [
      {
        label: 'Game Sentiment Analysis',
        data: getSentimentCounts(),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
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
    <div className='p-4'>
      <p className='text-sm text-center'>&#39;Sentiment&#39; Distribution Bar Chart</p>
      <Bar data={ chartData } options={ options } />
    </div>
  );
};

export default SentimentDistributionBarChart;