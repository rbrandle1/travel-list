import React, { useState } from 'react';

// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: true },
// 	{ id: 3, description: 'Charger', quantity: 1, packed: false },
// ];

const Logo = () => {
	return <h1>🏝️ Far Away 🧳</h1>;
};

const Form = ({ onHandleItems }) => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };
		console.log('✨  newItem ~', newItem);

		onHandleItems(newItem);

		setDescription('');
		setQuantity(1);
	};

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => {
					setQuantity(Number(e.target.value));
				}}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
			<button type='submit'>Add</button>
		</form>
	);
};

const PackingList = ({ items, onDeleteItems, onToggleItems }) => {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => (
					<Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
				))}
			</ul>
		</div>
	);
};

const Item = ({ item, onDeleteItems, onToggleItems }) => {
	return (
		<li>
			<input type='checkbox' value={item.packed} onChange={() => onToggleItems(item.id)} />
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItems(item.id)}>❌</button>
		</li>
	);
};

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

const App = () => {
	const [items, setItems] = useState([]);

	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItems = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const handleToggleItems = (id) => {
		setItems(items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	};

	return (
		<div className='app'>
			<Logo />
			<Form onHandleItems={handleAddItems} />
			<PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItems} />
			<Stats items={items} />
		</div>
	);
};
export default App;
