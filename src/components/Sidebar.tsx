import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';

const lotteries = ['mega-sena', 'quina', 'lotofácil', 'lotomania', 'timemania', 'dia-de-sorte']

export function Sidebar() {
  const [selectedLottery, setSelectedLoterry] = useState(lotteries[0]);

  return (
    <aside className={classNames('flex flex-col justify-between px-24 py-[5.75rem] w-[613px]', {
      'bg-mega-sena': selectedLottery === 'mega-sena',
      'bg-quina': selectedLottery === 'quina',
      'bg-loto-facil': selectedLottery === 'lotofácil', 
      'bg-loto-mania':selectedLottery === 'lotomania',
      'bg-time-mania': selectedLottery === 'timemania',
      'bg-dia-de-sorte': selectedLottery === 'dia-de-sorte'
    })}>
      <Listbox value={selectedLottery} onChange={setSelectedLoterry}>
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
            {lotteries.map(lottery => (
              <Listbox.Option 
                key={lottery} 
                value={lottery}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 
                  ${active ? 'bg-gray-light text-black' : 'text-gray-dark'}`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {lottery}
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
        <span className="block text-[1.25rem] leading-6 text-white font-bold">4531 – 07/04/2020</span>
      </div>
    </aside>
  );
}