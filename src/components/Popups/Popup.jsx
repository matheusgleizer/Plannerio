import React from 'react'
import './Popup.scss'

function FlightsPopup(props) {
    return (
        <div className="popup">
            <div className="popup-inner">
                This is the popup!
            </div>
            
            {/* <div className='flights-popup-container'>
                <h3>Flights</h3>
                <div className='flight-options'>
                    <span>Roundtrip</span>
                    <span>One-way</span>
                    <span>Multi-City</span>
                </div>
                <div className='flight-input'>
                    <label>from</label>
                    <input type="text" name="from"/>
                    <label>to</label>
                    <input type="text" name="to"/>
                    <label>Depart</label>
                    <input type="date" name="depart"/>
                    <label>Return</label>
                    <input type="date" name="return"/>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cabin Class and Travellers
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Economy</a>
                                    <a className="dropdown-item" href="#">Premium Economy</a>
                                    <a className="dropdown-item" href="#">Business class</a>
                                    <a className="dropdown-item" href="#">First-class</a>
                                </div>
                            </button>
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                
            </div> */}
            {props.children}
        </div>
    );
}

export default FlightsPopup
