
interface LotteryResultsProps {
    results?: Array<string | null> | null;
    loading?: boolean;
}

export function LotteryResults({ results, loading}: LotteryResultsProps) {

  if (loading) {
    return (
      <main className="flex justify-center items-center flex-1 text-gray-dark bg-gray-light h-screen lg:h-auto">
        <h1 className="text-3xl">Carregando...</h1>
      </main>
    )
  }

  return (
    <main className="flex flex-col justify-center items-center flex-1 px-7 py-[6.063rem]">
        <ul className="flex flex-wrap justify-center gap-[2.188rem] mt-auto">
          {results?.map(result => (
            <li key={Number(result)} className="flex items-center justify-center h-[4.75rem] w-[4.75rem] rounded-full bg-white lg:h-[6.938rem] lg:w-[6.625rem]">
              <span className="text-[1.25rem] font-bold leading-8 text-gray-dark lg:text-[1.688rem]">{result}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-5 text-black text-center mt-[5.25rem] lg:mt-auto">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </p>
    </main>
  );
}