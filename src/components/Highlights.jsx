import React from 'react'
import styles from './Highlights.module.css'
import Exhibit from './subComponents/Exhibit.jsx'
const Highlights = () => {
  return (
    <div className={styles.wrapper}>
        <h1>
            PHOTOGRAPHY HIGHLIGHTS
        </h1>
        <h2>Exhibit Experiences</h2>
        <div className={styles.exhibitExperiences}>
            <Exhibit topic='Exhibitions' subTopic='Art Displays' 
                paragraph='Our portfolio has been featured in various art exhibitions, 
                highlighting the fusion of nature and technology in photography.'/>
                <hr />
            <Exhibit topic='Publications' subTopic='Recognised Artistry' 
                paragraph='Several photographs have been published in 
                renowned photography magazines, reflecting our commitment
                to excellence.'/>
             <hr />
             <Exhibit topic='Future Sales' subTopic='Print Opportunities' 
                paragraph='We plan to offer prints for sale, allowing
                 you to bring a piece of our work into your everyday 
                 life.'/>
        </div>
    </div>
  )
}

export default Highlights