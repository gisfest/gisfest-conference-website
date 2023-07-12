import { PEditionCard } from '@/config/types';
import { useContext } from 'react';

const PastEditionCard = ({ session }: { session: PEditionCard }) => {
	const videoId = session.link.split('https://youtu.be/')[1];
	return (
		<div>
			<div className="relative w-[287px] h-[183px]  overflow-hidden  border  border-tc-30 rounded-2xl ">
				<iframe
					src={`https://youtube.com/embed/${videoId}`}
					title="Embedded Youtube Video"
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding=1;"
					className="absolute top-0 left-0 w-full h-full"
				></iframe>
			</div>
		</div>
	);
};

export default PastEditionCard;
