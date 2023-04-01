import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Home(props) {

    return (
        <div childrenlass='jumbotron'>
            <header>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col className="text-center">
                            <h1>Vaccine successfully booked!</h1>
                            <p className='p-header'>You can now check your email to review the vaccine information.</p>
                            <div className="my-5">
                                <Button variant="dark" className="mx-3" href='/'>Return to Home</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Home;
