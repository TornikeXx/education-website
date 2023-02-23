import React from 'react'
import './Card2.css'
import Boy from '../Assets/person 1.png'
import Girl from '../Assets/person 2.png'
import Girl2 from '../Assets/person 3.png'

const Card2 = () => {
    return (
        <>
            <div className='headings'>
                <h1>What Student's Say</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className='comments'>
                <div className='section first'>
                    < p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nam, voluptatum in a exercitationem asperiores, odio placeat tenetur, dolorem maxime incidunt eum sequi dolorum magnam quas? Quas, id maxime. Minus.</p>
                    <div className='person'>
                        <img src={Boy} alt="" />
                        <div className='name'>
                            <h3>Finlay Kirk</h3>
                            <h5>Web Developer</h5>
                        </div>
                    </div>
                </div>
                <div className='section first'>
                    < p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nam, voluptatum in a exercitationem asperiores, odio placeat tenetur, dolorem maxime incidunt eum sequi dolorum magnam quas? Quas, id maxime. Minus.</p>
                    <div className='person'>
                        <img src={Girl} alt="" />
                        <div className='name'>
                            <h3>Finlay Kirk</h3>
                            <h5>Web Developer</h5>
                        </div>
                    </div>
                </div>
                <div className='section first'>
                    < p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nam, voluptatum in a exercitationem asperiores, odio placeat tenetur, dolorem maxime incidunt eum sequi dolorum magnam quas? Quas, id maxime. Minus.</p>
                    <div className='person'>
                        <img src={Girl2} alt="" />
                        <div className='name'>
                            <h3>Finlay Kirk</h3>
                            <h5>Web Developer</h5>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Card2
