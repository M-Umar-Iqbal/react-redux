import React from 'react'
import Header from './Header'
import ItemCard from './cards/ItemCard'

function Home(props) {
    let itemsArr = [{
        id: 0,
        item_price: 1000,
        item_name: "T-Shirt",
        imgUrl: "https://www.kayazar.com/images/product_gallery/1652730424_make-it-happen-011-kayazar-t-shirt-Navy-Blue.webp"
    },
    {
        id: 1,
        item_price: 2000,
        item_name: "Levis T-Shirt",
        imgUrl: "https://ih1.redbubble.net/image.2418788258.6234/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg"
    },
    {
        id: 2,
        item_price: 1500,
        item_name: "Engine T-Shirt",
        imgUrl: "https://i.etsystatic.com/37227575/r/il/82acff/4627437413/il_fullxfull.4627437413_iwna.jpg"
    }]
    // console.warn("Home", props)
    return (<>
        <h2 className='heading-text'>Home</h2>
        {
            itemsArr.map((e) => {
                return (
                    <ItemCard myKey={e.id} itemName={e.item_name} itemPrice={e.item_price}
                        itemImageUrl={e.imgUrl}
                        onCallback={() => props.addToCartHandler({
                            id: e.id,
                            price: e.item_price,
                            name: e.item_name,
                            imageUrl: e.imgUrl
                        })} />
                )
            })
        }

    </>)
}

export default Home



/*
1- In simple terms, a store is what acts as a communication medium between your react application and redux root reducer. .
2- Different reducers can subscribe to different actions.
3- The actions can be passed to reducers via the store.
4- In reality, we need to apply the store to our root “App” component using a functionality called “provider” which is provided by the react-redux library.
To create a store you need the following :
    1-Provider from react-redux — essentially for wrapping your “App” component in the “index.js” file with the store.
    2-The root reducer which holds all the other reducers.
    3-Middlewares, if you are using any in your project.
To Use the redux dev tools in your chrome browser you need to do the following steps.
    1- npm install -- save-dev redux-devtools-extension
    2- After installing the dependencies we will import the compose functionality from redux dev tools extension using
        import { composeWithDevTools } from ‘redux-devtools-extension’;
    3- and we will create our store with Redux DevTools add-on as follows
        const store = createStore(rootReducer, composeWithDevTools( ));
    4- We are actually installing a probe inside our store to view our states and actions.It’s more of a diagnostics tool analogous to tools used in medical science. now our modified store is shown in the gist below.
    
*/