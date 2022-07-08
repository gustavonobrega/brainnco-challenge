
interface LotteryResultsProps {
    results?: String[];
    loading?: boolean;
}

export function LotteryResults({ results, loading }: LotteryResultsProps) {

  if (loading) {
    return (
      <main className=" flex justify-center items-center flex-1 text-gray-dark bg-gray-light">
        <h1 className="text-3xl">Carregando...</h1>
      </main>
    )
  }

  return (
    <main className=" flex flex-col justify-center items-center flex-1 bg-gray-light px-7 py-[6.063rem]">
        <ul className="flex flex-wrap gap-[2.188rem] mt-auto">
          {results?.map(result => (
            <li key={Number(result)} className="flex items-center justify-center h-[6.938rem] w-[6.625rem] rounded-full bg-white">
              <span className="text-[1.688rem] font-bold leading-8 text-gray-dark">{result}</span>
            </li>
          ))}
        </ul>

        <p className="leading-5 text-black mt-auto">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </p>
    </main>
  );
}