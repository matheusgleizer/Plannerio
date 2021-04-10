import React from 'react'
import './Popup.scss'
import {Form, Col, Row, Dropdown} from 'react-bootstrap'

function FlightsPopup(props) {
    return (
        <div className="popup">
            
            <div className='flights-popup-container'>
                <h3>Flights</h3>
                <div className='flight-options'>
                    <span>Roundtrip</span>
                    <span>One-way</span>
                    <span>Multi-City</span>
                </div>
                <Form className='flight-input'>
                    <Row>
                        <Col>
                            <Form.Label>from</Form.Label>
                            <Form.Control type="text" name="from"/>
                        </Col>
                        <Col>
                            <Form.Label>to</Form.Label>
                            <Form.Control type="text" name="to"/>
                        </Col>
                        <Col>
                            <Form.Label>Depart</Form.Label>
                            <Form.Control type="date" name="depart"/>
                        </Col>
                        <Col>
                            <Form.Label>Return</Form.Label>
                            <Form.Control type="date" name="return"/>
                        </Col>
                        <Col>
                            <Form.Label>Cabin Class & Travelers</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Form>
                
            </div>
            {props.children}
        </div>
    );
}

export default FlightsPopup
