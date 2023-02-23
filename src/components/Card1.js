import React from 'react'
import './Card1.css'
import Img1 from '../Assets/online-test 1.png'
import Img2 from '../Assets/exam 1.png'
import Img3 from '../Assets/certification 1.png'

const Card1 = () => {
    return (
        <div className='card-div'>
            <div className='component-1'>
                <img src={Img1} alt="" />
                <h2>Learn The latest Skills</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit non similique doloremque, quaerat sed reiciendis vel eaque be</h4>
            </div>
            <div className='component-2'>
                <img src={Img2} alt="" />
                <h2>Get Ready For a Career</h2>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum expedita itaque impedit nostrum similique modi </h4>
            </div>
            <div className='component-3'>
                <img src={Img3} alt="" />
                <h2>Earn a Certificate</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut delectus temporibus tenetur aperiam fugit labo</h4>
            </div>



        </div>
    )
}

export default Card1

