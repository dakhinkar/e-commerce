import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { HeartIcon, ShoppingCartIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';

import AuthContext from '../../Context/AuthContext';
import { useContext } from 'react';

const NavBar = () => {
    const authCxt = useContext(AuthContext);
    const isLogin = authCxt.isLoggedIn;
    return (
        <div className={styles.container}>
            <div className={styles.logo} >
                <Link to='/'>
                    <h1 >LOGO</h1>
                </Link>
            </div>
            <div className={styles.rightSide}>

                {!isLogin && <div className={styles.loginButton} >
                    <Link to='/auth' >

                        <UserCircleIcon />
                        <span>Login or Sign Up</span>
                        <ChevronDownIcon />

                    </Link>
                </div>
                }
                {isLogin && <div className={styles.favButton}>
                    <Link to='/favrioute'>
                        <HeartIcon />
                    </Link>
                </div>
                }
                {isLogin && <div className={styles.cartButton}>
                    <Link to='/mycart/' >
                        <ShoppingCartIcon />
                    </Link>
                </div>
                }
                {isLogin && <button className={styles.logout} onClick={authCxt.logout}>Logout</button>}
            </div>
        </div>
    );
}
export default NavBar;
