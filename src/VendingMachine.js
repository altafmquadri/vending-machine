import React from 'react';
import './VendingMachine.css'

const VendingMachine = (props) => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-menu">
                <h1>Please select a snack</h1>
            </div>

            <div className="VendingMachine-display">
                <img src="https://cdn2.bigcommerce.com/n-dvzvde/y6hsa/products/96/images/709/MM61_Combo_-_no_BS_bin__29294.1522994694.1280.1280.png?c=2" />
            </div>
            <div className="VendingMachine-selection">
                <ul>
                    <li>Soda</li>
                    <li>Chips</li>
                    <li>Candy</li>
                </ul>

            </div>
        </div>
    )
}

export default VendingMachine