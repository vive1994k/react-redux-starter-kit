import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <div> Table</div>
  </div>
)

export default HomeView
