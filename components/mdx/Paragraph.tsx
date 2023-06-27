export default function ParaGraph({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<p className="markdown-bg  text-tc-0 font-p-regular text-body laptop:text-h5">
			{children}
		</p>
	);
}
