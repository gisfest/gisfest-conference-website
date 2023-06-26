'use client';

import CallToAction from '@/components/CTA';
import CallForSpeakersContent from '@/app/contents/cfs.mdx';
import { MDXProvider } from '@mdx-js/react';

import TopBgPattern from '@/components/shared/TopBgPattern';
import List from '@/components/mdx/Lists';

const components: any = {
	li: List,
};

export default function CallForSpeakers() {
	return (
		<>
			<TopBgPattern variant="center" pageTitle="Call for Speakers" />

			<div className="flex flex-col gap-10">
				<MDXProvider components={components}>
					<CallForSpeakersContent />
				</MDXProvider>
				<CallToAction />
			</div>
		</>
	);
}
