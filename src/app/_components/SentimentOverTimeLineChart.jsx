import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { DateTime } from 'luxon';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const SentimentOverTimeLineChart = ({ data }) => {

  // Sort the data by datetime (from oldest to newest)
  const sortedData = data.sort((a, b) => a.timestamp - b.timestamp);

  // Group data by sentiment and date
  const groupedData = sortedData.reduce((groups, item) => {
    const date = item.datetime.split(' ')[0]; // Extract date from datetime
    if (!groups[date]) {
      groups[date] = { Positive: 0, Neutral: 0, Negative: 0 };
    }
    groups[date][item.sentiment]++;
    return groups;
  }, {});

  const labels = Object.keys(groupedData);

  const sentimentCounts = {
    Positive: [],
    Neutral: [],
    Negative: [],
  };

  // Populate sentiment count arrays for each date
  labels.forEach(date => {
    const counts = groupedData[date];
    sentimentCounts.Positive.push(counts.Positive);
    sentimentCounts.Neutral.push(counts.Neutral);
    sentimentCounts.Negative.push(counts.Negative);
  });

  const formattedLabels = labels.map(date => {
    // Format the date using Luxon's DateTime
    const formattedDate = DateTime.fromISO(date).toFormat('LLL d, yyyy');
    return formattedDate;
  });

  const chartData = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Positive',
        data: sentimentCounts.Positive,
        borderColor: 'rgba(75, 192, 192, 0.6)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Neutral',
        data: sentimentCounts.Neutral,
        borderColor: 'rgba(54, 162, 235, 0.6)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Negative',
        data: sentimentCounts.Negative,
        borderColor: 'rgba(255, 99, 132, 0.6)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
          text: 'Date',
        },
      },
    },
  };

  return (
    <>
      <p className='text-sm text-center'>&#39;Sentiment&#39; Over Time Line Chart</p>
      <Line data={ chartData } options={ options } />
    </>
  );
};

export default SentimentOverTimeLineChart;
