import React from 'react'
import styles from './Exhibit.module.css'
import {motion} from 'framer-motion'

const Exhibit = ({topic, subTopic, paragraph}) => {
  return (
    <div>
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className={styles.container}>
                    <h3>{topic}</h3>
                    <h5>{subTopic}</h5>
                    <p>{paragraph}</p>
                </div>
        </motion.div>
    </div>
  )
}

export default Exhibit