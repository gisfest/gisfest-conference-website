export const ListItem = ({ children }: { children: React.ReactElement }) => (
	<li className="list-disc  text-tc-0 font-p-regular text-body laptop:text-h5">
		{children}
	</li>
);

export const UnOrderedList = ({
	children,
}: {
	children: React.ReactElement;
}) => <ul className=" px-6 space-y-2">{children}</ul>;
