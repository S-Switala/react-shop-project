import CartItem from './CartItem';

const Cart = ({ cartItems, updateCartItemQuantity, rightPosition, removeItemFromCart }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart" style={{ right: `${rightPosition}px` }}>
      <h2 className='cart-title'>Twój koszyk</h2>
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateCartItemQuantity={updateCartItemQuantity}
              removeFromCart={removeItemFromCart}
            />
          ))}
          <h3 className='total-price'>Łączna suma: {(total).toFixed(2)} zł</h3>
        </>
      )}  
    </div>
  );
};

export default Cart;
