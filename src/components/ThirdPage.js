import React from 'react'
import './ThirdPage.css'
import Group from '../Assets/group.png'
import Heart from '../Assets/hearts 1.png'
import Jig from '../Assets/jigsaw 1.png'

const ThirdPage = () => {
    return (
        <div className='Thirdpage'>
            <img src={Group} alt="" />
            <div className='Learning'>
                <div className='h1'>
                    <h1>Premium <span>Learning</span> Experience</h1>
                </div>
                <div className='third-details'>
                    <div className='hearts'>
                        <img src={Heart} alt="" />
                        <div className='hearts-texts'>
                            <h3>Easily Accessible</h3>
                            <h6>Learning Will fell Comfortable With Courslab</h6>
                        </div>
                    </div>
                    <div className='hearts'>
                        <img src={Jig} alt="" />
                        <div className='hearts-texts'>
                            <h3>Fun learning experience</h3>
                            <h6>Learning Will fell Comfortable With Courslab</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThirdPage
