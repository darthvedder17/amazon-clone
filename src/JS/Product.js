import React from 'react'
import '../CSS/Product.css'
function Product({id,title,image,price,rating}) {
	return (
		<div className = 'product'>
			
			<div className = 'product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className ='product__rating'>
				{
					Array(rating)
					.fill()
					.map((_) => (

						<p>⭐</p>



						))




				}
				</div>
				</div>
			<img className = "cart__image" src = {image} alt = "" />

			<button className = "cart__button">Add to Basket</button>
			

		</div>
	)
}

export default Product