import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { gql,useQuery } from '@apollo/client';

const GET_LOTTERIES_QUERY = gql`
  query getLotteries {
    loterias {
      id
      nome
    },
    loteriasConcursos {
      loteriaId
      concursoId
    }
  }
`;

interface GetLotteriesResponse {
  loterias: {
    id: number;
    nome: string;
  }[],
  loteriasConcursos: {
    loteriaId: number;
    concursoId: string;
  }[],
}

interface SidebarProps  {
  changeLotteryContest: (concursoId: String) => void;
  lotteryContest: {
    id?: string;
    date?: Date;
  }
}

export function Sidebar({ changeLotteryContest, lotteryContest }: SidebarProps) {
  const { data, loading } = useQuery<GetLotteriesResponse>(GET_LOTTERIES_QUERY);
  const [selectedLottery, setSelectedLottery] = useState('mega-sena');


  useEffect(() => {
    const findLotteryId = data?.loterias.find(lottery => lottery.nome === selectedLottery);

    const findContestId = data?.loteriasConcursos.find(contest => contest.loteriaId === findLotteryId?.id);

    if (findContestId) {
      changeLotteryContest(findContestId.concursoId);
    }

  }, [selectedLottery])

  const formatDate = lotteryContest.date ? new Date(lotteryContest.date).toLocaleString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric'
    }
  ) : null
 
  if (loading) {
    return (
      <div className="flex items-center justify-center w-[613px] text-gray-dark ">
        <p className="text-3xl">Carregando...</p>
      </div>
    )
  }

  return (
    <aside className={classNames('flex flex-col justify-between px-24 py-[5.75rem] w-[613px]', {
      'bg-mega-sena': selectedLottery === 'mega-sena',
      'bg-quina': selectedLottery === 'quina',
      'bg-loto-facil': selectedLottery === 'lotofácil', 
      'bg-loto-mania':selectedLottery === 'lotomania',
      'bg-time-mania': selectedLottery === 'timemania',
      'bg-dia-de-sorte': selectedLottery.replace(/ /g, '-') === 'dia-de-sorte'
    })}>
      <Listbox value={selectedLottery} onChange={setSelectedLottery}>
        <Listbox.Button className="relative w-[215px] cursor-default rounded-lg bg-white py-[0.938rem] pl-[1.438rem] text-left font-medium text-gray-dark shadow-md focus:outline-none focus-visible:border-gray-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-dark text-[0.938rem]">
          <span className="block truncate uppercase">{selectedLottery}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[1.188rem]">
            <img src="/src/assets/polygon.svg" alt="Polygon Icon" />
          </span> 
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0" 
        >
          <Listbox.Options className="absolute mt-[3rem] w-[215px] overflow-auto rounded-b-md bg-white py-1 font-medium text-gray-dark text-[0.938rem] shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            {data?.loterias.map(lottery => (
              <Listbox.Option 
                key={lottery.id} 
                value={lottery.nome}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 
                  ${active ? 'bg-gray-light text-black' : 'text-gray-dark'}`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate uppercase ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {lottery.nome}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                        <img src="/src/assets/check.svg" alt="Check Icon" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>

      <strong className="flex items-center gap-[1.417rem] text-white text-3xl uppercase">
        <img src="/src/assets/logo.png" alt="Logo Mega-sena" />
        {selectedLottery}
      </strong>

      <div>
        <span className="block text-sm text-white font-medium mb-[0.875rem] tracking-widest uppercase">Concurso</span>
        <span className="block text-[1.25rem] leading-6 text-white font-bold">{`${lotteryContest?.id} - ${formatDate}`}</span>
      </div>
    </aside>
  );
}