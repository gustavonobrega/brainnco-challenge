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
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83601 5.96394C5.66224 6.1301 5.42659 6.22345 5.18088 6.22345C4.93517 6.22345 4.69952 6.1301 4.52575 5.96394L0.27619 1.89909C0.146637 1.77513 0.0584154 1.61722 0.0226774 1.4453C-0.0130606 1.27339 0.00529003 1.09521 0.0754089 0.933268C0.145528 0.77133 0.264265 0.632913 0.416614 0.535516C0.568962 0.438119 0.748079 0.386115 0.931322 0.386078L9.43043 0.386078C9.61368 0.386115 9.79279 0.438119 9.94514 0.535516C10.0975 0.632913 10.2162 0.77133 10.2863 0.933268C10.3565 1.09521 10.3748 1.27339 10.3391 1.4453C10.3033 1.61722 10.2151 1.77513 10.0856 1.89909L5.83601 5.96394Z" fill="#848484"/>
            </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
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