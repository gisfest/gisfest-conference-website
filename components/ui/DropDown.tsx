import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import DropDownIcon from '../icons/DropDownIcon';

export default function DropDownSelect({
	options,
	selected,
	setSelected,
	className,
}: {
	options: string[];
	selected: string;
	setSelected: (option: string) => void;
	className: string;
}) {
	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className="relative z-10 ">
				<Listbox.Button
					className={`relative w-full text-left pr-10 focus:outline-none ${className}`}
				>
					<span className="block truncate">{selected}</span>
					<span className="pointer-events-none text-tc-20 absolute inset-y-0 right-0 flex items-center pr-2">
						<DropDownIcon width={25} height={25} aria-hidden="true" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute mt-1 min-w-fit w-full  border-tc-20 border rounded-md bg-sc-10 py-2 px-4 ">
						{options.map((option, id) => (
							<Listbox.Option
								key={`drop-down-option${id}`}
								className={({ active }) =>
									`${
										active ? 'bg-sc-20 ' : ''
									}relative cursor-pointer  text-tc-10 rounded-md  hover:bg-sc-20 p-2`
								}
								value={option}
							>
								{({ selected }) => (
									<span
										className={`${
											selected ? 'text-white' : ''
										} block truncate `}
									>
										{option}
									</span>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
