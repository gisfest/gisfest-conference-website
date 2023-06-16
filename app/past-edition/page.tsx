'use client';
import PastEditionCard from '@/components/pastEdition/PastEditionCard';
import TopBgPattern from '@/components/shared/TopBgPattern';
import { siteConfiguration } from '@/config/siteConfig';
import { useState } from 'react';
export default function PastEditionPage() {
	const { pastEditions, pastEditionCategoryFilters } = siteConfiguration;
	const [category, setCategory] = useState('All');

	const handleSelectedCategory = (category: string) => {
		setCategory(category);
	};
	console.log(category);
	const filteredEditions = pastEditions.filter(
		(items) => items.category === category
	);
	return (
		<>
			<TopBgPattern variant="center" pageTitle="Explore Past Edition" />
			<div className="flex  items-center gap-2">
				<p className="text-tc-10">Filter:</p>
				<div>
					<select className="p-2 cursor-pointer text-tc-10 border-tc-20 border rounded-lg bg-sc-10">
						{pastEditionCategoryFilters.map((category, id) => (
							<option
								key={`category-${id}`}
								className="hover:bg-sc-20 rounded-lg text-tc-10 p-2"
								onClick={() => handleSelectedCategory(category)}
								value={category}
							>
								{category}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3   gap-4 ">
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
