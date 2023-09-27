import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: true },
// 	{ id: 3, description: 'Charger', quantity: 1, packed: false },
// ];

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

	const handleReset = () => {
		const confirm = window.confirm('Are you sure you want to delete all items?');

		if (confirm) setItems([]);
	};

	return (
		<div className='app'>
			<Logo />
			<Form onHandleItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItems={handleDeleteItems}
				onToggleItems={handleToggleItems}
				onReset={handleReset}
			/>
			<Stats items={items} />
		</div>
	);
};
export default App;
