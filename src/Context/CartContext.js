import {useState, createContext, useEffect, useContext } from "react";


const CartContext = createContext();

export const CartContextProvider = ({children})=>{
      const [favouriteItem, setFavourite] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        // console.log('get fav')
        const favouriteItem = JSON.parse(localStorage.getItem('favouriteItem'));
        // console.log('kkkkkkkk', favouriteItem);
        
        if (favouriteItem !== null && favouriteItem.length) {

            setFavourite(favouriteItem);
        }
    },[])
    
    useEffect(() => {
        // console.log('get cart')
        const cartItem = JSON.parse(localStorage.getItem('cartItem'));
        if (cartItem !== null && cartItem.length) {
            setCartItem(cartItem);
        }
    }, [])
    
    useEffect(() => {
        // console.log('set fav');
        localStorage.setItem('favouriteItem', JSON.stringify(favouriteItem));
    }, [favouriteItem]);
    useEffect(() => {
        // console.log('set cart');
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem]);
    // items state
    // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
    // make functions addToCart and removeFromCart

    const values = {
        setFavourite,
        setCartItem,
        favouriteItem,
        cartItem
    }

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>)
}

export const useCart = () => useContext(CartContext);
