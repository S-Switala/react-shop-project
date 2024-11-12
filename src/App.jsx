import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
	const [cartItems, setCartItems] = useState([])
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [rightPosition, setRightPosition] = useState(0)

	const addToCart = product => {
		const itemInCart = cartItems.find(item => item.id === product.id)

		if (itemInCart) {
			setCartItems(cartItems.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }])
		}
	}

	const removeItemFromCart = (id) => {
		setCartItems(cartItems.filter(item => item.id !== id))
	};

	const updateCartItemQuantity = (id, newQuantity) => {
		setCartItems(cartItems.map(item =>
			item.id === id ? { ...item, quantity: newQuantity } : item
		));
	};

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen)
	}

	const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0)

	useEffect(() => {
		const calculateRightPosition = () => {
			const wrapperWidth = 1200
			const windowWidth = window.innerWidth

			if (windowWidth > wrapperWidth) {
				const sideMargin = (windowWidth - wrapperWidth) / 2
				setRightPosition(sideMargin + 25)
			} else {
				setRightPosition(20)
			}
		}

		calculateRightPosition()
		window.addEventListener('resize', calculateRightPosition)

		return () => {
			window.removeEventListener('resize', calculateRightPosition)
		}
	}, [])

	return (
		<div >
			<div className='app'>
				<h1 className='shop-name'>Sklep internetowy</h1>
				<button className='cart-button' style={{ right: `${rightPosition}px` }} onClick={toggleCart}>
					<i className='fas fa-shopping-cart'></i>
					<span className='cart-count'>{totalItemsInCart}</span>
				</button>
				{isCartOpen && <Cart rightPosition={rightPosition} cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeItemFromCart={removeItemFromCart} />}
				<ProductList addToCart={addToCart} />
			</div>
		</div>
	)
}

export default App
