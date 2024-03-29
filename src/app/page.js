'use client';

import { useEffect, useState } from 'react';
import SentimentDistributionBarChart from "./_components/SentimentDistributionBarChart";
import SourceDistributionPieChart from "./_components/SourceDistributionPieChart";
import SentimentOverTimeLineChart from './_components/SentimentOverTimeLineChart';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://ivanbudianto.github.io/test-json/test.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="items-center">
        <div className="text-center bg-cyan-950">
          <p className="text-lg">Game Sentiments Data Viz</p>
        </div>
        <div className="py-4">
        </div>
        <div>
          <SentimentDistributionBarChart data={data} />
          <SourceDistributionPieChart data={data} />
          <SentimentOverTimeLineChart data={data} />
        </div>
      </div>
    </main>
  );
};

export default Home;