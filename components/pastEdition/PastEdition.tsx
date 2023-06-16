import PastEditionCard from './PastEditionCard';
import { siteConfiguration } from '@/config/siteConfig';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import Link from 'next/link';
import ArrowBackwardIcon from '../icons/ArrowBackwardIcon';
import ArrowForwardIcon from '../icons/ArrowForwardIcon';


export default function PastEditons() {
	const { pasteditions, pastEditionURL, pastEditionsCTA } = siteConfiguration;
	function handleClick() {
		console.log('increment like count');
	  }
	return (
		<div className="flex flex-col gap-y-10">
			<div className='flex justify-between'>
				<SectionHeader
					title="Explore Past GISfest"
					layout="text-left"
					paragraph="Watch the amazing session from GISfest2022"
				/>
				<div className="flex justify-end gap-4 mobile:none tablet:basis:1/2 laptop:basis-2/3 tablet:self-center p-2 tablet:p-4">
					<div className="rounded-full h-[42px] w-[42px] text-tc-20 bg-[#222225] border border-tc-20">
						<ArrowBackwardIcon id='scrollButton' className='back relative left-8' width={32} height={32} onClick={handleClick}/>
					</div>
					<div className="rounded-full h-[42px] w-[42px] text-tc-10 bg-[#222225] border border-tc-20">
						<ArrowForwardIcon id='scrollButton' className='forward' width={32} height={32} onClick={scrollToComponent} />
					</div>
				</div>
			</div>
			<div>
			<div id="myComponent" className="flex flex-nowrap justisfy-between gap-[10px] tablet:gap-8 overflow-x-hidden">
				{pasteditions.map((session, id) => (
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
	
};

const scrollToComponent = () => {
	const component = document.getElementById('myComponent') || null;
	if (component) {
		component.scrollLeft += 20;
	}
}


