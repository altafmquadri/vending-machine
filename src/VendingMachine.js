import React from 'react';
import './VendingMachine.css'
import { Link } from 'react-router-dom'

const VendingMachine = (props) => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-menu">
                <h1>Please select a snack</h1>
            </div>

            <div className="VendingMachine-display">
                <img alt="vending machine" src="https://cdn2.bigcommerce.com/n-dvzvde/y6hsa/products/96/images/709/MM61_Combo_-_no_BS_bin__29294.1522994694.1280.1280.png?c=2" />
            </div>
            <div className="VendingMachine-selection">
                <ul>
                    <li><Link to='/soda'>Soda</Link></li>
                    <li><Link to='/chips'>Chips</Link></li>
                    <li><Link to='/candy'>Candy</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default VendingMachine