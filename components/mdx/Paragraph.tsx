export default function ParaGraph({
	content,
	timeframe,
	children,
}: {
	content: string;
	timeframe: string;
	children: React.ReactElement;
}) {
	return (
		<div className="markdown-bg space-y-2 flex flex-col text-tc-0 font-p-regular text-body laptop:text-h5">
			<p>{content}</p>

			{timeframe ? (
				<span className="italic">Time frame: {timeframe}</span>
			) : null}

			{children}
		</div>
	);
}
