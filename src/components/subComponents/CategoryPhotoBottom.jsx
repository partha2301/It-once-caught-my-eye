import React from 'react'
import styles from './CategoryPhotoBottom.module.css'

const CategoryPhotoBottom = ({image, caption}) => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p>
                {caption}
            </p>
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="" />
        </div>
    </div>
  )
}

export default CategoryPhotoBottom