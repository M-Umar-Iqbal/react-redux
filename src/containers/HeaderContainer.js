import {  connect } from 'react-redux';
import {addToCart} from '../services/actions/action';
import Header from '../components/Header';
const mapStateToProps=(state)=>({
    cartData:state.cartItems
});
// const mapStateToProps=(state,ownProps)=>{
//     const data= ownProps.mobile?state.cartItems:state.cartItems;
//     return{
//         cartData:data
//     }
// }
const mapDispatchToProps=dispatch=>({
   
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);
// export default Home;
