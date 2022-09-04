import React, {useState} from 'react'
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import {useCart} from '../../Context/CartContext'


const Card = ({ item }) => {
    const {
        setFavourite,
        setCartItem,
        favouriteItem,
        cartItem
    } = useCart();
    const intialFav = () => {
        let data = favouriteItem.filter((data) => data.id === item.id);
        console.log(data);
        if (data === null || data.length === 0)
            return false;
        return true;
    }
    const intialCart = () => {
        let data = cartItem.filter((data) => data.id === item.id);
       if (data === null || data.length === 0)
            return false;
        return true;
    }
    const [isFav, setIsFav] = useState(intialFav);
    const [isAdd, setIsAdd] = useState(intialCart);
    console.log("sdsdsd", item);
    console.log('fav', isFav);
    console.log('cart', isAdd);
    const favHandler = () => {
        if (isFav) {
            const filterItem = favouriteItem.filter((data) => data.id !== item.id)
            setFavourite(filterItem);
        } else {
            setFavourite((prev) => (
                [...prev, item]
            ))
        }
        setIsFav(!isFav);
    }
    const addToChartHandler = () => {
         if (isAdd) {

             const filterItem = cartItem.filter((data) => data.id !== item.id)
            setCartItem(filterItem);
        } else {
            setCartItem((prev) => (
                 [...prev, item]
            ))
        }
        setIsAdd(!isAdd);
    }
    return (
        <div className={styles.card}>
            <div className={styles.cardLink}>
                <button
                    className={`${styles.favButton} ${isFav ? styles.favSeleced : ""}`} onClick={favHandler}>
                    <HeartIcon  />
                </button>

                <div className={styles.cardHeader}>
                    <Link to={`product/${item.id}`}>
                        <img className={styles.cardImg} src={item.image} alt="img not found"/>
                    </Link>
                    
                </div>

                <div className={styles.cardBody}>
                    <>
                        <p className={styles.cardTitle}>
                            <span className={styles.brand} >
                                Brand,
                            </span>
                            {item.title}
                        </p>
                    </>
                    <div className={styles.rating}>
                        {[...Array(Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.starIcon}
                                aria-hidden='true' />
                        )}
                        {[...Array(5 - Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.emptyStarIcon}
                                aria-hidden='true' />
                        )}
                        <p className='text-xs ml-1 font-light mt-0.5'>{!isAdd ? "item.rating.count" : "Remove from Cart"}</p>
                    </div>

                    <div>
                        <div className='my-auto'>
                            <span >${item.price}</span>
                            </div>       
                    </div>
                            
                    <div className={styles.addToCart}>
                        <button
                            className={`${styles.addToCartButton} ${isAdd ? styles.removeFromChart : ""}`}
                            onClick={addToChartHandler}  
                            >
                            <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                            <span
                                className={styles.buttonText}
                            >{isAdd ? "Remove from chart" : "Add to cart!"}</span>
                        </button>
                    </div>


                </div>


            </div>



        </div>
    )
}

export default Card