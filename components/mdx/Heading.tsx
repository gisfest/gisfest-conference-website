export function HeadingOne({ children }: { children: React.ReactElement }) {
	return (
		<h1 className="text-tc-0 text-h5 font-p-medium laptop:text-h3 font-clashDisplay">
			{children}
		</h1>
	);
}

export function HeadingTwo({ children }: { children: React.ReactElement }) {
	return (
		<h2 className="text-tc-0 text-body font-p-regular laptop:text-h4 font-clashDisplay">
			{children}
		</h2>
	);
}
