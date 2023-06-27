const List = ({ children }: { children: React.ReactElement }) => (
	<li className="list-disc  text-tc-0 font-p-regular text-body laptop:text-h5">
		{children}
	</li>
);

export default List;
