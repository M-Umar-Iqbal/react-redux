import React from 'react'

function CartItemCard(props) {
    const { itemName, itemPrice, itemImageUrl, onCallback, itemQuantity } = props;
    return (
        <div style={{
            height: '70px', minWidth: "350px", maxWidth: '450px', backgroundColor: 'grey', margin: '5px', display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: '10px', borderRadius: "10px"

        }}>

            <img style={{ height: "50px", width: "50px" }} alt="mobile" src={itemImageUrl} />
            <span><b>{itemQuantity}</b></span>
            <span><b>{itemName}</b></span>
            <span><b>Price:</b> {itemPrice} </span>
            <button onClick={() => onCallback ? onCallback() : null}>Remove To Cart</button>


        </div>
    )
}

export default CartItemCard