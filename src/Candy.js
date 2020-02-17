import React from 'react';
import { Link } from 'react-router-dom'
import './Candy.css'

const Candy = (props) => {
    return (
        <div className='Candy'>
            <div className="Candy-img">
                <img alt="candy" src="https://www.washingtonian.com/wp-content/uploads/2019/10/Halloween-Candy.jpg" />
            </div>
            <div>
                <h2><Link to='/'>Go Back</Link></h2>
            </div>
        </div>
    )
}

export default Candy