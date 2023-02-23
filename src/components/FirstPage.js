import React from 'react'
import './FirstPage.css'
import Img1 from '../Assets/foto.png'

const FirstPage = () => {
    return (

        <div className='grid-div'>
            <div className='col-1'>
                <h1>The <span>Smart</span></h1>
                <h1>Choice For <span>Future</span></h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati quasi autem, beatae inventore facere aliquam ad voluptatibus dolor, necessitatibus nam tempore. Doloremque nesciunt iste excepturi possimus nihil amet exercitationem.</h6>
                <input type="text" placeholder='Search for a location' /> <button>Continue</button>



            </div>
            <div className='col-2'>
                <img src={Img1} alt="/" />
            </div>

        </div>

    )
}

export default FirstPage
