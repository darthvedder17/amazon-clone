import React from 'react'
import {useStateValue} from './StateProvider';
import '../CSS/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
	const [{basket}] = useStateValue();

	return (

		

		<div className= 'checkout'>

		<img className  = 'checkout__ad' src = 'https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/citiemi/Citi_ILM_640x45._CB407121684_.jpg' />

		{basket?.length == 0 ? (
			<div>
				<h2> Your shopping Basket is empty! </h2>
				<p>You have no items in your basket.To buy one or more items,click "Add to basket" next to the item.</p>

			</div>

			):(

			<div>
				<h2 className = "checkout__title"> Your shopping basket </h2>
				{basket?.map(item => (

						<CheckoutProduct
							id = {item.id}
							title = {item.title}
							image = {item.image}
							price= {item.price}
							rating  ={item.rating}





						 />


					))}
				

			</div>
			)}
		</div>
	)
}

export default Checkout;