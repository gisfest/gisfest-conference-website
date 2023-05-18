import { siteConfiguration} from '@/config/siteConfig'
import SponsorCard from './SponsorCard';
import SectionHeader from '../shared/SectionHeader';
import Link from 'next/link';

//todo-- going to config @vickystickz
//done @jeafrezy



export default function Sponsors() { 
	const { sponsors } = siteConfiguration

	return (
		<div className="flex flex-col gap-y-10 ">
			<SectionHeader
				title="Sponsor"
				paragraph="Organizations that contributed to the achievement of GISfest"
			/>
			<div className="gap-[10px] tablet:gap-8 grid grid-cols-2 tablet:grid-cols-3  laptop:grid-cols-4 grid-flow-row ">
				{sponsors.map((sponsor, id) => (
					<SponsorCard key={`sponsor-${id}`} sponsor={sponsor} />
				))}
			</div>
			<div className="flex flex-col tablet:flex-row gap-10 w-full tablet:p-6 laptop:p-20 ">
				<div className="tablet:basis:1/2 laptop:basis-1/3  p-2">
					<h1 className="font-p-semibold text-h4 text-tc-10">
						Be part of the GISfest 2023 experience and lets make history
						together.
					</h1>
				</div>
				<div className="flex justify-start tablet:justify-end tablet:basis:1/2 laptop:basis-2/3 tablet:self-center   p-2 tablet:p-4">
					<Link
						href={'https://downloadurl.come'}
						title="Download sponsorship deck"
						className="p-2 tablet:p-4 text-h5 text-left tablet:text-center hover:bg-tc-30 font-p-medium border border-tc-30 rounded-lg text-tc-0"
					>
						Download sponsorship deck
					</Link>
				</div>
			</div>
		</div>
	);
}
