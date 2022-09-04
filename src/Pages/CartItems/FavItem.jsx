
import { useProduct } from '../../Context/ProductContext';
import { useCart } from '../../Context/CartContext';
import Products from '../Products';

const FavItem = () => {
    const { favouriteItem } = useCart();

    const { setProductList } = useProduct();
    setProductList(favouriteItem);
    return (
        <>
            <Products />
        </>
    );
}
export default FavItem;
