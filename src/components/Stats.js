const Stats = ({ items }) => {
	if (!items.length) {
		return (
			<div className='stats'>
				<em>Start adding some items to your packing list 🚀</em>
			</div>
		);
	}

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className='stats'>
			<em>
				{percentage !== 100
					? `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage || 0}%)`
					: `You got everything! Ready to ✈️`}
			</em>
		</footer>
	);
};
export default Stats;
