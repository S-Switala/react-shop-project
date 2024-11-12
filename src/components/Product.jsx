const Product = ({ product, addToCart }) => {
	return (
		<div className='product'>
			<div className='product-img-box'>
				<img className='product__img' src={product.image} alt={product.title} />
			</div>
			<div className='product-title-box'>
				<h3 className='product-title'>{product.title}</h3>
				<p>Cena: {product.price} zł</p>
				<button className='product-btn' onClick={() => addToCart(product)}>
					<p>Dodaj do koszyka</p>
				</button>
			</div>
		</div>
	)
}

export default Product
