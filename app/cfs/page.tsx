'use client';

import CallToAction from '@/components/CTA';
import CallForSpeakersContent from '@/app/contents/cfs.mdx';
import { MDXProvider } from '@mdx-js/react';

import TopBgPattern from '@/components/shared/TopBgPattern';
import List from '@/components/mdx/Lists';
import ParaGraph from '@/components/mdx/Paragraph';
import { HeadingOne, HeadingTwo } from '@/components/mdx/Heading';
import Timeline from '@/components/mdx/Timeline';

const components: any = {
	li: List,

	p: ParaGraph,
	h1: HeadingOne,
	h2: HeadingTwo,
};

export default function CallForSpeakers() {
	return (
		<>
			<TopBgPattern variant="center" pageTitle="Call for Speakers" />

			<div className="flex flex-col gap-10">
				<MDXProvider components={components}>
					<CallForSpeakersContent />
					<Timeline />
				</MDXProvider>
				<CallToAction />
			</div>
		</>
	);
}
