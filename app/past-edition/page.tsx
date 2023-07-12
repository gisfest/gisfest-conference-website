'use client';
import PastEditionCard from '@/components/pastEdition/PastEditionCard';
import TopBgPattern from '@/components/shared/TopBgPattern';
import DropDownSelect from '@/components/ui/DropDown';
import { siteConfiguration } from '@/config/siteConfig';
import { PastEditionCategory } from '@/config/types';
import { useState } from 'react';

export default function PastEditionPage() {
	const { pastEditions } = siteConfiguration;
	const [category, setCategory] = useState<string>('All');

	const handleSelectedCategory = (category: string) => {
		setCategory(category);
	};

	const filteredEditions = pastEditions.filter(
		(items) => items.category === category
	);

	const filters = Object.values(PastEditionCategory).filter((item) => {
		return isNaN(Number(item));
	});
	return (
		<>
			<TopBgPattern variant="center" pageTitle="Explore Past Edition" />
			<div className="flex  items-center gap-2">
				<p className="text-tc-10">Filter:</p>
				<div>
					<DropDownSelect
						options={filters}
						selected={category}
						className="px-4 py-2 appearance-none transition ease-in-out focus:outline-none cursor-pointer text-tc-10 border-tc-20 border rounded-lg bg-sc-10"
						setSelected={setCategory}
					/>
				</div>
			</div>
			<div className="w-full grid m-auto min-h-screen grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4   gap-4 ">
				{category === 'All'
					? pastEditions.map((session, id) => (
							<PastEditionCard
								key={`past-edition-item-${id}`}
								session={session}
							/>
					  ))
					: filteredEditions.map((session, id) => (
							<PastEditionCard key={`past-edition-${id}`} session={session} />
					  ))}
			</div>
		</>
	);
}
