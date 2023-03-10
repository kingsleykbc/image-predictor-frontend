import './Table.css';

interface TableProps {
	headings: string[];
	data: Array<{ [key: string]: any }>;
}

const Table = ({ headings, data }: TableProps) => {
	const theadElements = headings.map(heading => <th key={heading}>{heading}</th>);
	const tbodyElements = data.map((row, ind) => (
		<tr key={`row-${ind}`}>
			{headings.map((column, index) => (
				<td key={`column-${index}`}>{row[column] || ' - '}</td>
			))}
		</tr>
	));
	return (
		<div className='TableWrapper'>
			<table className='Table'>
				<thead>
					<tr>{theadElements}</tr>
				</thead>
				<tbody>{tbodyElements}</tbody>
			</table>
		</div>
	);
};

export default Table;
