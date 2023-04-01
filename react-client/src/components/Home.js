import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Home(props) {

    return (
        <div>
            <header className="jumbotron">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col className="text-center">
                            <h1>The Importance of COVID-19 Vaccination</h1>
                            <p className='p-header'>Getting vaccinated against COVID-19 is the best way to protect yourself, 
                                your loved ones, and your community from the virus. The vaccines are safe 
                                and effective, and getting vaccinated is a critical step in ending the pandemic. 
                                Protect yourself and others by getting vaccinated today.</p>
                            <div className="my-5">
                                <Button variant="dark" className="mx-3" href='https://ipac-canada.org/covid-19-vaccine-guidance'>Read more about COVID</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <main>
                <Container className="my-5">
                    <Row className="justify-content-center">
                        <Col md={6} className="mb-5">
                            <div className="d-flex justify-content-center align-items-center icon-container mb-3">
                                <FontAwesomeIcon icon={faHouseChimneyMedical} size="4x" />
                            </div>
                            <h2 className="my-3">Vaccination Locations</h2>
                            <p>
                                Go to the page where you can find a vaccination location near you. 
                            </p>
                            <Link to="/location-list">
                                <Button variant="dark">Loctaion List</Button>
                            </Link>
                        </Col>
                        <Col md={6} className="mb-5">
                            <div className="d-flex justify-content-center align-items-center icon-container mb-3">
                                <FontAwesomeIcon icon={faSyringe} size="4x" />
                            </div>
                            <h2 className="my-3">Preferred Vaccines</h2>
                            <p>
                                There are multiple vaccines available. Find out which one is right for you.
                            </p>
                            <Link to="/preferred-vaccine-list">
                                <Button variant="dark">Available Vaccines</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Home;
