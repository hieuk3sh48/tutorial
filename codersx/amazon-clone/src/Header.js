import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    //console.log(basket);

    const signOut = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            {/* logo on the left -> img */}
            {/* Search box */}
            {/* 3 Links */}
            {/* Basket icon with number */}

            {/* logo on the left -> img */}
            <Link to='/'>
                <img 
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </Link>

            {/* Search box */}
            <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            
            <div className='header__nav'>

                {/* 3 Links */}
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={signOut} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* Basket icon with number */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
