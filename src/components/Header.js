import React from 'react'
import { useNavigate } from 'react-router-dom';
function Header(props) {
  const navigate = useNavigate();
  console.warn("Home", props)
  return (<div className='header'>
    <h1 onClick={() => navigate('/')} style={{ color: "white" }}>Home</h1>
    <div className='cart-icon'
      onClick={() => navigate('/cart')}
    >
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwWxMTM8ULsAVSgpt9YqA9tU8gYh3McddWyb01AmiPoLT0aTG8hJuc9rkMLXXXHcZ-qI&usqp=CAU'
        height={"50px"} />
      <span className='counter'>
        {props.cartData.length}
      </span>
    </div>
  </div>)
}

export default Header