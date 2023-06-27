export function useClipboard(value: string) {
	const onCopy = () => {
		navigator.clipboard.writeText(value);
		//notify user
		// todo - interaction design or a toast?@teemi
	};
	return { onCopy };
}
