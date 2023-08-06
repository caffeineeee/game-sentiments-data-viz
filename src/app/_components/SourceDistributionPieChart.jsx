import { Pie } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(Title, Tooltip, Legend, ArcElement);

const SourceDistributionPieChart = ({ data }) => {

  const getSourceCounts = () => {
    const sourceCounts = {};

    data.forEach(item => {
      const source = item.source;
      if (sourceCounts[source]) {
        sourceCounts[source]++;
      } else {
        sourceCounts[source] = 1;
      }
    });

    return Object.values(sourceCounts);
  };

  const getSourceLabels = () => {
    const sourceLabels = {};

    data.forEach(item => {
      const source = item.source;
      sourceLabels[source] = source;
    });

    return Object.values(sourceLabels);
  };

  const chartData = {
    labels: getSourceLabels(),
    datasets: [
      {
        data: getSourceCounts(),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const options = {
    plugins: {

    },
  };

  return (
    <>
      <p className='text-sm text-center'>&#39;Source&#39; Distribution Pie Chart</p>
      <Pie data={ chartData } options={ options } />
    </>
  );
};

export default SourceDistributionPieChart;