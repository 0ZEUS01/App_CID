import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, 
    faEnvelope,
    faPhone,
    faHome,
    faArrowRight,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';
import ProfileForm from '../views/profileForm';

const ProfilePage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserDetails(JSON.parse(storedUser));
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, []);

    const handleUpdate = async (updatedUser) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/utilisateurs/${userDetails.id_utilisateur}`, updatedUser);
            if (response.data) {
                setUserDetails(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                await axios.delete(`http://localhost:8080/api/utilisateurs/${userDetails.id_utilisateur}`);
                localStorage.removeItem('user');
                // Redirect to logout or home page
            } catch (error) {
                console.error('Error deleting user account:', error);
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h4 className="page-title">Profile</h4>
                            <ul className="breadcrumbs">
                                <li className="nav-home">
                                    <Button variant="link" className="nav-link">
                                        <FontAwesomeIcon icon={faHome} />
                                    </Button>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <Button variant="link" className="nav-link">Profile</Button>
                                </li>
                            </ul>
                        </div>
                        <h4>User Information</h4>
                        {userDetails ? (
                            <>
                                <Row className="mb-4">
                                    <Col md={4}>
                                        <Card className="card-stats card-round">
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={4}>
                                                        <div className="icon-big text-center">
                                                            <FontAwesomeIcon icon={faUser} className="text-warning" />
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} className="col-stats">
                                                        <div className="numbers">
                                                            <p className="card-category">Name</p>
                                                            <Card.Title as="h4">{`${userDetails.prenom} ${userDetails.nom}`}</Card.Title>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer>
                                                <hr />
                                                <div className="stats">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Last updated
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="card-stats card-round">
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={4}>
                                                        <div className="icon-big text-center">
                                                            <FontAwesomeIcon icon={faEnvelope} className="text-success" />
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} className="col-stats">
                                                        <div className="numbers">
                                                            <p className="card-category">Email</p>
                                                            <Card.Title as="h4">{userDetails.email}</Card.Title>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer>
                                                <hr />
                                                <div className="stats">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Last updated
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="card-stats card-round">
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={4}>
                                                        <div className="icon-big text-center">
                                                            <FontAwesomeIcon icon={faPhone} className="text-danger" />
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} className="col-stats">
                                                        <div className="numbers">
                                                            <p className="card-category">Phone</p>
                                                            <Card.Title as="h4">{userDetails.num_telephone}</Card.Title>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer>
                                                <hr />
                                                <div className="stats">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Last updated
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <Card>
                                            <Card.Header>
                                                <Card.Title as="h4">Edit Profile</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <ProfileForm user={userDetails} onUpdate={handleUpdate} onDelete={handleDelete} />
                                            </Card.Body>
                                            <Card.Footer>
                                                <hr />
                                                <div className="stats">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Last updated
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <div>No user data available</div>
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
