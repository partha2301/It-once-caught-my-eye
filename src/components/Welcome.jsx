import React from 'react'
import './Welcome.css'
import Road from './../assets/road.JPG'
import Rabbit from './../assets/rabbits.JPG'
const Welcome = () => {
  return (
    <div className='cards-container'>
        <div className="sec1 sec">
            <div className="card1 text-card card">
                <p className='top'>Capturing the Stories</p>
                <p className="bottom">Explore diverse photography styles and stories</p>
            </div>
            <div className="card2 image-card card">
                <img src={Road} alt="" />
            </div>
        </div>
        <div className="sec2 sec">
            <div className="card3 text-card card">
                <p className='top'>
                    Welcome to 'It Once Caught My Eye', where each photograph holds a unique story waiting to be discovered.
                </p>
                <button className="gallery bottom">
                    View Gallery
                </button>
            </div>
            <div className="card4 image-card card">
                <img src={Rabbit} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Welcome