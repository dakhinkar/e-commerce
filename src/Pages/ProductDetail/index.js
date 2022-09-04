import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
import {useCart} from '../../Context/CartContext'
const ProductDetail = () => {

    const { product_id } = useParams();
    const { product, setProductId, loading } = useProduct();
    console.log("product",product);
    useEffect(() => {
        setProductId(product_id);
    }, [product_id]);

        const {
        setFavourite,
        setCartItem,
        favouriteItem,
        cartItem
    } = useCart();
    const intialFav = () => {
        let data = favouriteItem.filter((data) => data.id === product.id);
        if (data === null || data.length === 0)
            return false;
        return true;
    }
    const intialCart = () => {
        let data = cartItem.filter((data) => data.id === product.id);
       if (data === null || data.length === 0)
            return false;
       
        return true;
    }
    const [isFav, setIsFav] = useState(intialFav);
    const [isAdd, setIsAdd] = useState(intialCart);
    // console.log("sdsdsd", item);
    // console.log('fav', favouriteItem);
    // console.log('cart', cartItem);
    const favHandler = () => {
        if (isFav) {
            const filterItem = favouriteItem.filter((data) => data.id !== product.id)
            setFavourite(filterItem);
        } else {
            setFavourite((prev) => (
                [...prev, product]
            ))
        }
        setIsFav(!isFav);
    }
    const addToChartHandler = () => {
        if (isAdd) {

            const filterItem = cartItem.filter((data) => data.id !== product.id)
            setCartItem(filterItem);
        } else {
            setCartItem((prev) => (
                [...prev, product]
            ))
        }
        setIsAdd(!isAdd);
    }

    return (
        <>
            {(!loading && product?.id) ? (
                <div className="flex flex-wrap max-7-xl mx-auto my-4" >
                    <div className="w-full p-4 sm:w-2/2 md:w-2/2 xl:w-5/5 flex flex-wrap">
                        <img src={product.image} className={styles.image}></img>

                        <div className="w-full my-auto lg:py-6 lg:pl-10 lg:w-2/3">

                            <h2 className="text-sm mt-4 mb-2 hover:text-red-500 tracking-widest">Brand</h2>
                            <h1 className="text-gray-900 text-2xl font-bold mt-1 mb-5 hover:text-green-500">{product.title}</h1>
                            <div className={styles.rating}>
                                {[...Array(Math.round(product.rating.rate))].map((e, i) =>

                                    <StarIcon
                                        key={`star-${i}`}
                                        className={styles.starIcon}
                                        aria-hidden='true' />
                                )}
                                {[...Array(5 - Math.round(product.rating.rate))].map((e, i) =>

                                    <StarIcon
                                        key={`star-${i}`}
                                        className={styles.emptyStarIcon}
                                        aria-hidden='true' />
                                )}
                                <p className='text-xs ml-1 font-light mt-0.5'>{product.rating.count}</p>
                            </div>
                            <p className="border-b-2 mb-2 border-zinc-900/10 pb-6 capitalize">{product.description}</p>
                            
                            <div className="flex">
                            
                                <div className='my-auto'>
                                    <span >${product.price}</span>
                                </div>
                            
                            <div className="block ml-auto my-auto mt-0">
                            <div className={styles.addToCart}>
                                        <button
                                            className={`${styles.addToCartButton} ${isAdd ? styles.removeFromChart : ""}`}
                                            onClick={addToChartHandler}
                                        >
                                    <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                                    <span className={styles.buttonText}>{isAdd ? "Remove from chart" : "Add to cart!"}</span>
                                </button>
                            </div></div>            
                            
                            <div className="block my-auto">
                            <button className={`${styles.favButton} ${isFav ? styles.favSeleced : ""}`} onClick={favHandler}>
                                <HeartIcon />
                            </button></div>           
                            
                            </div>
                           


                        </div>

                    </div>
                </div>) :
                (<h1>...laoding</h1>)}
            
        </>)

}

export default ProductDetail;