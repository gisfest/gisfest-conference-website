import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

// src- https://www.30secondsofcode.org/react/s/use-hash/
export const useHash = () => {
	const [hash, setHash] = React.useState('');
	const path = usePathname();
	const router = useRouter();
	const hashChangeHandler = React.useCallback(() => {
		if (path !== '/') {
			const hash = window.location.hash;
			router.replace('/');
			setTimeout(() => {
				setHash(hash);
			}, 1000);
		} else {
			setHash(window.location.hash);
		}
	}, []);

	React.useEffect(() => {
		if (!window) return;
		window.addEventListener('hashchange', hashChangeHandler);
		return () => {
			window.removeEventListener('hashchange', hashChangeHandler);
		};
	}, []);
	//adding any here to prevent the type error on the Header component
	const updateHash: any = React.useCallback(
		(newHash: any) => {
			if (newHash !== hash) window.location.hash = newHash;
		},
		[hash]
	);

	return [hash, updateHash];
};
