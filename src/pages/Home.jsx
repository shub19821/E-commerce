import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Productss from '../components/Productss'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Announcement/> 
        <Navbar/> 
        <Slider/> 
        <Categories/>
        <Productss/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home