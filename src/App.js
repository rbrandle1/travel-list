import React from 'react';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: true },
	{ id: 3, description: 'Charger', quantity: 1, packed: false },
];

const Logo = () => {
	return <h1>🏝️ Far Away 🧳</h1>;
};

const Form = () => {
	return (
		<div className='add-form'>
			<h3>What do you need for your 😍 trip?</h3>
			<select>{Array.from({ length: 20 }, (_, i) => i + 1)}</select>
			<input type='text' placeholder='Item...' />
			<button>Add</button>
		</div>
	);
};

const PackingList = () => {
	return (
		<div className='list'>
			<ul>
				{initialItems.map((i) => (
					<Item item={i} />
				))}
			</ul>
		</div>
	);
};

const Item = ({ item }) => {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
};

const Stats = () => {
	return (
		<footer className='stats'>
			<em>💼 You have X items on your list, and you already packed X (X%)</em>
		</footer>
	);
};

const App = () => {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
};
export default App;
