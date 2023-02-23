import React from 'react'
import './SecondPage.css'
import ImgFirst from '../Assets/image 8.png'
import ImgSecond from '../Assets/image 7.png'
import ImgThird from '../Assets/image 6.png'

const SecondPage = () => {
    return (
        <div className='second-page'>
            <div className='heading'>
                <h1>Our Tracks</h1>
                <h4>Lorem ipsum, dolor sit amet c</h4>
            </div>
            <div className='courses-grid'>
                <div className='box first-box'>
                    <img src={ImgFirst} alt="" />
                    <div className='box-info'>
                        <h5>UI/UX Design</h5>
                        <h2>UI/UX Design for Beginners</h2>
                        <h3>$98</h3>
                    </div>
                    <hr />
                    <div className='box-details'>
                        <h5>22hr 20min</h5> <h5>24 Courses</h5> <h5>250 sales</h5>
                    </div>
                    <div className='button'>
                        <button>Join course</button>
                    </div>
                </div>
                <div className='box first-box'>
                    <img src={ImgSecond} alt="" />
                    <div className='box-info'>
                        <h5>UI/UX Design</h5>
                        <h2>UI/UX Design for Beginners</h2>
                        <h3>$98</h3>
                    </div>
                    <hr />
                    <div className='box-details'>
                        <h5>22hr 20min</h5> <h5>24 Courses</h5> <h5>250 sales</h5>
                    </div>
                    <div className='button'>
                        <button>Join course</button>
                    </div>
                </div>
                <div className='box first-box'>
                    <img src={ImgThird} alt="" />
                    <div className='box-info'>
                        <h5>UI/UX Design</h5>
                        <h2>UI/UX Design for Beginners</h2>
                        <h3>$98</h3>
                    </div>
                    <hr />
                    <div className='box-details'>
                        <h5>22hr 20min</h5> <h5>24 Courses</h5> <h5>250 sales</h5>
                    </div>
                    <div className='button'>
                        <button>Join course</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SecondPage
