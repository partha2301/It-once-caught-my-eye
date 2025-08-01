import React from 'react'
import './EnterPortfolio.css'
import CategoryPhotoTop from './subComponents/CategoryPhotoTop'
import CategoryPhotoBottom from './subComponents/CategoryPhotoBottom'
import Monochrome from './../assets/gallery/monochrome.JPG'
import Memories from './../assets/gallery/memories.JPG'
import Bricks from './../assets/gallery/bricks.JPG'
import Bloom from './../assets/gallery/bloom.JPG'
import Feline from './../assets/gallery/feline.JPG'
import Altered  from './../assets/gallery/altered.JPG'

const EnterPortfoliio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className="heading">
        <h1 className='portfolio-head'>My Portfolio</h1>
        <p>
            Welcome to my portfolio. Here you’ll find a selection of my work. Explore my projects to learn more about what I do.
        </p>
      </div>
      <div className="categories">
        <CategoryPhotoBottom image={Monochrome} caption="We live in a Monochromatic World"/>
        <CategoryPhotoTop image={Memories} caption="Your Memories Lie Frozen"/>
        <CategoryPhotoBottom image={Bricks} caption="The Bricks have Souls"/>
        <CategoryPhotoTop image={Bloom} caption="Wherever you Bloom"/>
        <CategoryPhotoBottom image={Feline} caption="Fairly Feline"/>
        <CategoryPhotoTop image={Altered} caption="Slightly Altered"/>
      </div>
    </div>
  )
}

export default EnterPortfoliio