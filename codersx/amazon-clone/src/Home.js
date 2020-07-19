import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt='home'
            />

            {/* Product id, title, price, rating, image */}
            <div className='home__row'>
                <Product
                    id='1'
                    title='The Lean startup'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                />
                <Product
                    id='2'
                    title='Kenwood'
                    price={239}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                    id='3'
                    title='Samsung'
                    price={199.99}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                />
                <Product
                    id='4'
                    title='Amazon Echo'
                    price={98.99}
                    rating={5}
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                />
                 <Product
                    id='5'
                    title='Apple iPad'
                    price={598.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                    id='6'
                    title='Samsung LED 49'
                    price={1094.98}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                />
            </div>
        </div>
    )
}

export default Home
