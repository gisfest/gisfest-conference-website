import React from 'react';

// src- https://www.30secondsofcode.org/react/s/use-hash/
export const useHash = () => {
	const [hash, setHash] = React.useState('');

	const hashChangeHandler = React.useCallback(() => {
		setHash(window.location.hash);
	}, []);

	React.useEffect(() => {
		if (!window) return;
		window.addEventListener('hashchange', hashChangeHandler);
		return () => {
			window.removeEventListener('hashchange', hashChangeHandler);
		};
	}, []);

	const updateHash = React.useCallback(
		(newHash: any) => {
			if (newHash !== hash) window.location.hash = newHash;
		},
		[hash]
	);

	return [hash, updateHash];
};
