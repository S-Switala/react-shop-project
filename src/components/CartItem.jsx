const CartItem = ({ item, updateCartItemQuantity, removeFromCart }) => {
	const handleIncreaseQuantity = () => {
		updateCartItemQuantity(item.id, item.quantity + 1)
	}

	const handleDecreaseQuantity = () => {
		if (item.quantity > 1) {
			updateCartItemQuantity(item.id, item.quantity - 1)
		}
	}

	const handleRemoveItem = () => {
		removeFromCart(item.id)
	}

	return (
		<div className='cart-item'>
			<div className='title-box'>
				<span>{item.title}</span>
			</div>
			<div className='itemInfo-box'>
				<span>{item.price} zł</span>
				<div className='quantity-box'>
					<button
						className='cart-symbol-btn'
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleDecreaseQuantity()
							}
						}}
						tabIndex={0}>
						<span className='material-symbols-outlined' onClick={handleDecreaseQuantity}>
							remove
						</span>
					</button>
					<p>{item.quantity}</p>

					<button
						className='cart-symbol-btn'
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleIncreaseQuantity()
							}
						}}
						tabIndex={0}>
						<span className='material-symbols-outlined' onClick={handleIncreaseQuantity}>
							add
						</span>
					</button>
					<span>{(item.price * item.quantity).toFixed(2)} zł</span>

					<button
						className='cart-symbol-btn'
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleRemoveItem()
							}
						}}
						tabIndex={0}>
						<span className='material-symbols-outlined' onClick={handleRemoveItem}>
							close
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
