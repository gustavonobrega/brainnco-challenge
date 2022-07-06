import { LotteryResults } from "../components/LotteryResults";
import { Sidebar } from "../components/Sidebar"

export function Home() {
  return(
    <div className="flex min-h-screen">
      <Sidebar />
      <LotteryResults />
    </div>
  );
}