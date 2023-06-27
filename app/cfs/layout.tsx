import type { Metadata } from 'next';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}

const pageTitle = 'Call for Speakers | GISfest 2023 Conference';
const pageDescription = 'Submit your sessions in GISfest...';

//todo - dynamically generate og url
export const metadata: Metadata = {
	title: pageTitle,
	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: 'https://www.gisfest.org/cfs',
	},

	twitter: {
		title: pageTitle,
		description: pageDescription,
	},
};
