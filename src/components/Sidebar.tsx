import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useGetLotteriesQuery } from '../graphql/generated';

interface SidebarProps  {
  changeLotteryContest: (concursoId: string) => void;
  lotteryContest: {
    id?: string | null;
    date?: string | null;
  }
}

export function Sidebar({ changeLotteryContest, lotteryContest }: SidebarProps) {
  const { data, loading } = useGetLotteriesQuery();
  const [selectedLottery, setSelectedLottery] = useState('mega-sena');

  useEffect(() => {
    const findLotteryId = data?.loterias?.find(lottery => lottery?.nome === selectedLottery);

    const findContestId = data?.loteriasConcursos?.find(contest => contest?.loteriaId === findLotteryId?.id);

    if (findContestId && findContestId.concursoId) {
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
      <div className="flex justify-center text-gray-dark pt-20 lg:items-center lg:w-[613px] lg:pt-0">
        <p className="text-3xl">Carregando...</p>
      </div>
    )
  }

  return (
    <aside className={classNames('w-screen h-[28.125rem] p-14 flex flex-col justify-between items-center lg:items-start lg:px-24 lg:py-[5.75rem] lg:w-[613px] lg:h-screen', {
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
            {data?.loterias?.map(lottery => (
              <Listbox.Option 
                key={lottery?.id} 
                value={lottery?.nome}
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
                      {lottery?.nome}
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
        {lotteryContest.id && lotteryContest.date ? (
          <span className="text-lg text-white font-bold lg:text-[1.25rem] lg:leading-6">{`${lotteryContest.id} - ${formatDate}`}</span>
        ) : ''}
      </div>
    </aside>
  );
}