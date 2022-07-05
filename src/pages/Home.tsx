import { Sidebar } from "../components/Sidebar"

export function Home() {
  return(
    <div className="flex min-h-screen">
      <Sidebar />
      <h1>Lottery Results</h1>
    </div>
  );
}