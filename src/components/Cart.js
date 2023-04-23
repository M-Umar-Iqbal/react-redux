import React from 'react'
import CartItemCard from './cards/cartItemCard';
function Cart(props) {
  const { cartData, removeToCartHandler } = props;
  console.log({ cartData })
  return (
    < React.Fragment >
      <div className='heading-text'>Cart</div>
      <h3>{cartData.length == 0 ? "Your cart is Empty" : `You have ${cartData.length} item(s) in your cart`}</h3>
      {
        cartData.map((e) => {
          return <CartItemCard itemQuantity={`x${cartData.filter((item) => item.itemData.id == e.itemData.id).length}`} itemImageUrl={e.itemData.imageUrl} itemName={e.itemData.name} itemPrice={e.itemData.price} onCallback={
            () =>
              removeToCartHandler({ id: e.itemData.id })
          } />
        })
      }
    </React.Fragment >
  )
}

export default Cart