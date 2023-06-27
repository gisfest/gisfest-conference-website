'use client';
import PastEditionCard from './PastEditionCard';
import { siteConfiguration } from '@/config/siteConfig';
import SectionHeader from '@/components/shared/SectionHeader';
import Link from 'next/link';
import ArrowBackwardIcon from '@/components/icons/ArrowBackwardIcon';
import ArrowForwardIcon from '@/components/icons/ArrowForwardIcon';

export default function PastEditions() {
	const { pastEditions, pastEditionURL, pastEditionsCTA } = siteConfiguration;

	return (
		<div className="flex flex-col gap-y-10">
			<div className="flex justify-between">
				<SectionHeader
					title={pastEditionsCTA}
					layout="text-left"
					paragraph="Watch the amazing session from GISfest2022"
				/>
				{/*<div className="flex justify-end gap-4 mobile:none tablet:basis:1/2 laptop:basis-2/3 tablet:self-center p-2 tablet:p-4">
					<button className="past-edition-nav">
						<ArrowBackwardIcon width={32} height={32} />
					</button>
					<button className="past-edition-nav">
						<ArrowForwardIcon width={32} height={32} />
					</button>
				</div>*/}
			</div>
			<div>
				<div className="flex flex-nowrap  justisfy-between gap-[10px] tablet:gap-8 overflow-x-auto pb-1">
					{pastEditions.map((session, id) => (
						<PastEditionCard key={`session-${id}`} session={session} />
					))}
				</div>
			</div>

			<div className="flex justify-center tablet:basis:1/2 laptop:basis-2/3 tablet:self-center   p-2 tablet:p-4">
				<Link
					href={pastEditionURL}
					title={pastEditionsCTA}
					className="py-[12px] px-6 font-clashDisplay text-body whitespace-nowrap text-center hover:bg-tc-30 font-p-medium border border-tc-30 rounded-lg text-tc-0"
				>
					{pastEditionsCTA}
				</Link>
			</div>
		</div>
	);
}
