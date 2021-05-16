import React from 'react'
import HeaderPanel from './Header/HeaderPanel'
import SlidingCorousel  from './Slider/SlidingCorousel'
import MultiSlidingCorousel from './Slider/MultiSlidingCorousel'

const Home = () => {
    return (
        <div>
            <HeaderPanel />
            <SlidingCorousel />
            <MultiSlidingCorousel />
        </div>
    )
}

export default Home;