import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import video from '../videos/video1.mp4'
import pic2 from '../images/product_track.jpg'
import pic3 from '../images/marketplace.jpg'



function Cards() {
    return (
        <div className='cards'>

            <video src={video} autoPlay loop muted></video>
            <h1>TRY US OUT</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <a href='https://cargo-hive-web3.vercel.app/'>
                            <CardItem
                                src={pic2}
                                text={'Admin pannel'}
                                path='https://cargo-hive-web3.vercel.app/'
                                label='Admin pannel'
                            />
                        </a>
                        <a href='https://cargo-hive-web3-admin.vercel.app/'>
                            <CardItem
                                src={pic3}
                                path='https://cargo-hive-web3-admin.vercel.app/'
                                text={'Customer Pannel'}
                                label='Customer Pannel'
                            />
                        </a>

                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Cards
