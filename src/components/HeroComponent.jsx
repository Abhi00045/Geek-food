import { useState } from 'react'
// import Header from './Header.jsx'

const Hero = ()=>{
    return(
        <>

        <div className='backgroundimg'>
            {/* <Header/> */}
            <div className="content">
                <div className="one">
                    <h1>Let us find your</h1>
                    <span>
                    <h1>Forever Food.</h1>
                    </span>
                </div>
                <div className="two">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sed, cumque aliquid soluta odit dolorem quae nam cum ratione unde.</p>
                </div>
                <div className="three">
                    <button>
                        Search Now
                    </button>
                    <button>
                        Know more
                    </button>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
        </>
    )
}
export default Hero;
