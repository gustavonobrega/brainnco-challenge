import { useState } from "react";
import { LotteryResults } from "../components/LotteryResults";
import { Sidebar } from "../components/Sidebar"
import { useGetLotteryContestByIdQuery } from '../graphql/generated';

export function Home() {
  const [lotteryContest, setLotteryContest] = useState("2359");
  const { data, loading} = useGetLotteryContestByIdQuery({
    variables: {
      id: lotteryContest
    }
  });

  return (
    <div className="min-h-screen bg-gray-light lg:flex">
      <Sidebar changeLotteryContest={setLotteryContest} lotteryContest={{ id: data?.concurso?.id, date: data?.concurso?.data}} />
      <LotteryResults results={data?.concurso?.numeros} loading={loading}/>
    </div>
  )
}