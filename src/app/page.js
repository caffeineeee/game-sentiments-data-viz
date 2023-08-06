import SentimentDistributionBarChart from "./_components/SentimentDistributionBarChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center text-xl">
        <div>
          <h1>Game Sentiments Data Viz</h1>
        </div>
        <p className="pb-4 text-sm text-gray-300">This project acts as part of Recruitment process for the Front-End Engineer position at CDP</p>
        <div>
          <div>
            <SentimentDistributionBarChart />
          </div>
        </div>
      </div>
    </main>
  )
}
