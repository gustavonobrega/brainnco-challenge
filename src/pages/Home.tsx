import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { LotteryResults } from "../components/LotteryResults";
import { Sidebar } from "../components/Sidebar"

const GET_LOTTERY_CONTEST_QUERY = gql`
  query GetLotteryContest ($id: ID!) {
    concurso (id: $id) {
      id
      numeros
      data
    }
  }`;

interface GetLotteryContestResponse {
  concurso: {
    id: string;
    numeros: String[];
    data: Date; 
  }
}

export function Home() {
  const [lotteryContest, setLotteryContest] = useState<String>("2359");
  const { data, loading } = useQuery<GetLotteryContestResponse>(GET_LOTTERY_CONTEST_QUERY, {
    variables: {
      id: lotteryContest
    }
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar changeLotteryContest={setLotteryContest} lotteryContest={{ id: data?.concurso.id, date: data?.concurso.data}} />
      <LotteryResults results={data?.concurso.numeros} loading={loading}/>
    </div>
  );
}