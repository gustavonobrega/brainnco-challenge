
const lotteryResults = [6, 9, 28, 33, 37, 40];

export function LotteryResults() {
  return (
    <main className=" flex justify-center items-end flex-1 bg-gray-light py-[6.063rem]" >
      <div className="flex flex-col items-center gap-y-[16.75rem]" >
        <ul className="flex gap-[2.188rem]">
            {lotteryResults.map(result => (
              <li className="flex items-center justify-center h-[6.938rem] w-[6.625rem] rounded-full bg-white">
                <span className="text-[1.688rem] font-bold leading-8 text-gray-dark ">{result}</span>
              </li>
            ))}
          </ul>

          <p className="leading-5 text-black">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
          </p>
      </div>
    </main>
  );
}