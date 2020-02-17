import React from 'react';
import { Link } from 'react-router-dom'
import './Soda.css'

const Soda = (props) => {
    return (
        <div className='Soda'>
            <div className="Soda-img">
                <img alt="soda" src="https://images-na.ssl-images-amazon.com/images/I/61nFdesx46L.jpg" />
            </div>
            <div>
                <h2><Link to='/'>Go Back</Link></h2>
            </div>
        </div>
    )
}

export default Soda