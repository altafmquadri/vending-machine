import React from 'react';
import { Link } from 'react-router-dom'
import './Chips.css'

const Chips = (props) => {
    return (
        <div className='Chips'>
            <div className="Chips-img">
                <img alt="chips" src="https://vpc-prod-thumbor-public-gcp.boxed.com/unsafe/fit-in/512x400/filters:quality(100):max_bytes(200000):fill(white)/https://dcmzfk78s4reh.cloudfront.net/1568056772811.jpg" />
            </div>
            <div>
                <h2><Link to='/'>Go Back</Link></h2>
            </div>
        </div>
    )
}

export default Chips