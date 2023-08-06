import SentimentDistributionBarChart from "./_components/SentimentDistributionBarChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="items-center">
        <div className="text-center bg-cyan-950">
          <p className="text-lg">Game Sentiments Data Viz</p>
          <p className="text-sm text-gray-300">This project acts as part of Recruitment process for the Front-End Engineer position at CDP</p>
        </div>
        <div className="py-4">
        </div>
          <div>
          <SentimentDistributionBarChart />
        </div>
      </div>
    </main>
  )
}
