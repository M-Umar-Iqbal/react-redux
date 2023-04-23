import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { removeToCart } from '../services/actions/action';
const mapStateToProps = (state) => ({
    cartData: state.cartItems
});

const mapDispatchToProps = dispatch => ({
    removeToCartHandler: (itemId) => dispatch(removeToCart(itemId))
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default Home;
