import { useState, useEffect } from 'react'

const ShoppingCartButton = ({ totalItemsInCart, wrapperRef }) => {
	const [isFixed, setIsFixed] = useState(false)

	const handleScroll = () => {
		if (wrapperRef && wrapperRef.current) {
			const wrapperRect = wrapperRef.current.getBoundingClientRect()

			if (wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight) {
				setIsFixed(true)
			} else {
				setIsFixed(false)
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);

	return (
		<button className={`cart-button ${isFixed ? 'fixed' : 'absolute'}`}>
			<i className='fas fa-shopping-cart'></i>
			<span className='cart-count'>{totalItemsInCart}</span>
		</button>
	)
}

export default ShoppingCartButton
