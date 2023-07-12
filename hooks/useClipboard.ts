export function useClipboard(value: string) {
	const onCopy = () => {
		navigator.clipboard.writeText(value);
	};
	return { onCopy };
}
