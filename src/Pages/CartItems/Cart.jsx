import styles from './Cart.module.css';
import { useCart } from '../../Context/CartContext';
import Card from './Card';

const Cart = () => {
    const { cartItem } = useCart();
    console.log('cart', cartItem)
    const subAmount = cartItem.reduce((acc, data) => {
        return acc + data.price;
    }, 0);
    return (
        <div className={styles.cartContainer}>
            <div className={styles.cardContainer}>
                {
                    cartItem.map((data, index) =>
                    (
                        <Card
                            key={index.toString()}
                            item={data}
                        />
                    ))
                }
            </div>
            <div className={styles.summary}>
                <div className={styles.summaryHeading}>Order Summary</div>
                <div className={styles.subdetails}>
                    <span>Subtotal</span>
                    <span>$ {subAmount}</span>
                </div>
                <div className={styles.subdetails}>
                    <span>Shipping Estimate</span>
                    <span>$ 5</span>
                </div>
                <div className={styles.subdetails}>
                    <span>Tax Estimate</span>
                    <span>$ 5</span>
                </div>
                <div className={`${styles.subTotals} ${styles.subdetails}`}>
                    <span style={{ fontWeight: 700 }}>Order Total</span>
                    <span> $ {subAmount + 10}</span>
                </div>
            </div>

        </div>
    );
}

export default Cart;
