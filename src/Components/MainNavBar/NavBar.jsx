import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { HeartIcon, ShoppingCartIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo} >
                <Link to='/'>
                    <h1 >LOGO</h1>
                </Link>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.loginButton} >
                    <Link to='/auth' >

                        <UserCircleIcon />
                        <span>Login or Sign Up</span>
                        <ChevronDownIcon />

                    </Link>
                </div>
                <div className={styles.favButton}>
                    <Link to='/favrioute'>
                        <HeartIcon />
                    </Link>
                </div>
                <div className={styles.cartButton}>
                    <Link to='/mycart/' >
                        <ShoppingCartIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default NavBar;
