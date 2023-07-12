import React from 'react';
import Image from 'next/image';
import bgIsolationAbstract from '@/public/assets/bg-patterns/bg-isolation-abstract.svg';

const TopBgPattern = ({
	variant = 'right',
	pageTitle,
	pageDescription = '',
}: {
	variant?: 'right' | 'center';
	pageTitle?: string;
	pageDescription?: string;
}) => {
	return (
		<div
			className={`w-full  flex flex-col items-center space-y-6 justify-center ${
				pageTitle ? 'h-[15rem] laptop:h-[30rem] ' : ''
			}`}
		>
			<Image
				src={bgIsolationAbstract}
				alt="bg-isolation"
				priority={true}
				className={`absolute h-auto w-auto  z-0 ${
					pageTitle ? 'laptop:-top-2 top-10' : 'top-0'
				} ${variant === 'right' ? 'right-0 ' : 'right-[50%] translate-x-1/2'}`}
			/>
			{pageTitle && (
				<p className="text-tc-0 text-h3 laptop:text-h1 text-left laptop:text-center font-p-semibold">
					{pageTitle}
				</p>
			)}

			{pageDescription && (
				<p className="text-tc-0 laptop:text-h5 text-body text-center ">
					{pageDescription}
				</p>
			)}
		</div>
	);
};

export default TopBgPattern;
