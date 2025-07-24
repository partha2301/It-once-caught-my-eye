import React from 'react'
import styles from './CategoryPhotoTop.module.css'
const CategoryPhotoTop = ({image, caption}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.textContainer}>
            <p>
                {caption}
            </p>
        </div>
    </div>
  )
}

export default CategoryPhotoTop