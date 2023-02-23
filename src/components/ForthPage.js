import React from 'react'
import './ForthPage.css'
import Teacher1 from '../Assets/teacher 1.png'
import Teacher2 from '../Assets/teacher 2.png'
import Teacher3 from '../Assets/teacher 3.png'

const ForthPage = () => {
    return (
        <>
            <div className='title'>
                <h1>What Students Say</h1>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum mollitia aliquam </h3>
            </div>
            <div className='teachers-grid'>
                <div className='grid teacher-card'>
                    <img src={Teacher1} alt="" />
                    <h2>Mathew Mcnat</h2>
                    <h4>Professor @george brown college</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque maiores iste maxime molestiae rerum debitis ipsam numquam, conse</p>

                    <h3>Engineering Physics</h3>

                </div>
                <div className='grid teacher-card'>
                    <img src={Teacher2} alt="" />
                    <h2>Tracy Wright</h2>
                    <h4>Professor @george brown college</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque maiores iste maxime molestiae rerum debitis ipsam numquam, conse</p>

                    <h3>Engineering Physics</h3>

                </div>
                <div className='grid teacher-card'>
                    <img src={Teacher3} alt="" />
                    <h2>Cynthia Nelson</h2>
                    <h4>Professor @george brown college</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi neque maiores iste maxime molestiae rerum debitis ipsam numquam, conse</p>

                    <h3>Engineering Physics</h3>

                </div>

            </div>
        </>
    )
}

export default ForthPage
