import React from 'react'
import styles from './Portfolio2.module.css'
import Immanual from './../assets/gallery/immanual.avif'

const Portfolio2 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.portfolio}>
            <h1>PORTFOLIO</h1>
        </div>
        <div className={styles.visionAndImageContainer}>
            <div className={styles.imageContainer}>
                <img  className={styles.image} src={Immanual} alt="" />
            </div>
            <div className={styles.visionContainer}>
                <div className={styles.vision}>
                    <h2>OUR VISION</h2>
                    <p>
                        'It Once Caught My Eye' showcases a variety of 
                        photography subjects from wildlife to clouds, 
                        portraits, and different photography techniques. 
                        Our goal is presenting the stories behind each 
                        capture along with the camera settings used, 
                        ensuring a deep appreciation for the art of 
                        photography
                    </p>
                    <button className={styles.learnMore}>
                        View Gallery
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio2