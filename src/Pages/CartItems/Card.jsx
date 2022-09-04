import React from 'react';
import styles from './Cart.module.css';
import { TrashIcon } from '@heroicons/react/solid';
import { useCart } from '../../Context/CartContext';
const Card = ({ item }) => {
    console.log("item", item);
    const {
        setCartItem,
        cartItem
    } = useCart();
    const deleteHandler = () => {

        const filterItem = cartItem.filter((data) => data.id !== item.id)
        setCartItem(filterItem);
    }
    return (
        <div className={styles.card}>
            <div className={styles.itemImage}>
                <img src={item.image} alt="img not found" />
            </div>
            <div className={styles.details}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <span>Brand</span>
                        <TrashIcon onClick={deleteHandler} />

                    </div>
                    <div className={styles.subHeading}>
                        {item.title}
                    </div>
                </div>
                <div className={styles.footer}>
                    ${item.price}
                </div>
            </div>
        </div>
    );
}

export default Card;