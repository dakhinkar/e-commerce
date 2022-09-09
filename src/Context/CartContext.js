import {useState, createContext, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const authCtx =  useContext(AuthContext);
    const [favouriteItem, setFavourite] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    // if (authCtx.isLoggedIn) {
        useEffect(() => {
            // console.log('get fav')
            const favouriteItem = JSON.parse(localStorage.getItem('favouriteItem'));
            // console.log('kkkkkkkk', favouriteItem);
        
            if (favouriteItem !== null && favouriteItem.length && authCtx.isLoggedIn) {

                setFavourite(favouriteItem);
            }
            
            
        }, [authCtx.isLoggedIn])
    
        useEffect(() => {
            // console.log('get cart')
            const cartItem = JSON.parse(localStorage.getItem('cartItem'));
            if (cartItem !== null && cartItem.length && authCtx.isLoggedIn) {
                setCartItem(cartItem);
            } 
        }, [authCtx.isLoggedIn])
    
        useEffect(() => {
            // console.log('set fav');
            if (authCtx.isLoggedIn) {
                 localStorage.setItem('favouriteItem', JSON.stringify(favouriteItem)); 
            }
           
        }, [favouriteItem]);
        useEffect(() => {
            // console.log('set cart');
            if (authCtx.isLoggedIn) {
                 localStorage.setItem('cartItem', JSON.stringify(cartItem));
            }
           
        }, [cartItem]);
    // }
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
