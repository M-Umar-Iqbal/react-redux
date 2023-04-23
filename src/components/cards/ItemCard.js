import React from 'react'

function ItemCard(props) {
    const { itemName, itemPrice, itemImageUrl, onCallback, myKey } = props;
    return (
        <div className='cart-wrapper' key={myKey}>
            <div className='img-wrapper item' >
                <img className='img-style' alt="mobile" src={itemImageUrl} />
            </div>
            <span><b>{itemName}</b></span>
            <span><b>Price:</b> {itemPrice} </span>
            <div className='btn-wrapper item'>
                <button onClick={() => onCallback()}>Add To Cart</button>

            </div>
        </div>
    )
}

export default ItemCard