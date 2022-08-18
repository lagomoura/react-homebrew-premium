import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ItemListSale from './ItemListSale';

export default function ItemListSaleContainer() {
	const [salesItem, setSalesItem] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const db = getFirestore();
		const productosCollection = collection(db, 'productos');

		getDocs(productosCollection)
			.then((resultado) => {
				setSalesItem(
					resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
				);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{loading ? (
				<div>
					<h1 className='loading'>Loading...</h1>
				</div>
			) : (
				<div>
					<ItemListSale salesItem={salesItem} />
				</div>
			)}
		</>
	);
}
