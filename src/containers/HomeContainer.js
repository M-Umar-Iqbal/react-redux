import { connect } from 'react-redux';
import { addToCart } from '../services/actions/action';
import Home from '../components/Home';
const mapStateToProps = state => ({
    cartData: state.cartItems
});
const mapDispatchToProps = dispatch => ({
    addToCartHandler: (data) => dispatch(addToCart(data))
});


// const mapDispatchToProps=(dispatch,ownProps)=>{
//     const dispatchFunction = ownProps.addToCart
//       ? (data) => dispatch(addToCart(data))
//       : (data) => dispatch(addToCart(data));
//     return {
//         addToCartHandler: dispatchFunction
//     }

// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
