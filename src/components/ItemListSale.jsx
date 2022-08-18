import React from 'react';
import ItemSale from './ItemSale';

export default function ItemListSale({ salesItem }) {
	return (
		<div>
			{salesItem?.map((item) => {
				return (
					<ItemSale
						key={item.id}
						url_img={item.url_img}
						name={item.name}
						oldPrice={item.oldPrice}
						newPrice={item.newPrice}
					/>
				);
			})}
		</div>
	);
}
