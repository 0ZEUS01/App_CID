import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowRight, faUserPlus, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import MainHeader from '../components/mainHeader';
import Footer from '../components/footer';

const poles = ['Développement', 'Marketing', 'Finance', 'Ressources Humaines'];
const divisions = ['IT', 'Communication', 'Comptabilité', 'Recrutement'];

const AddUser = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        prenom: '',
        nom: '',
        email: '',
        num_telephone: '',
        username: '',
        mot_de_passe: '',
        date_naissance: '',
        sexe: 'M',
        adresse: '',
        pole: '',
        division: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the newUser data to your backend API
        console.log('New user data:', newUser);
        // After successful creation, navigate back to the user list
        navigate('/users');
    };

    const generatePassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < 12; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setNewUser({ ...newUser, mot_de_passe: password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <Container fluid>
                    <div className="page-header">
                        <h3 className="fw-bold mb-3">Ajouter un Utilisateur</h3>
                        <ul className="breadcrumbs mb-3">
                            <li className="nav-home">
                                <Link to="/dashboard">
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>
                            <li className="separator">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </li>
                            <li className="nav-item">
                                <Link to="/users">Gestion des Utilisateurs</Link>
                            </li>
                            <li className="separator">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </li>
                            <li className="nav-item">
                                <span>Ajouter un Utilisateur</span>
                            </li>
                        </ul>
                    </div>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Formulaire d'Ajout d'Utilisateur</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Prénom</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="prenom"
                                                        value={newUser.prenom}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Nom</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="nom"
                                                        value={newUser.nom}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control 
                                                        type="email" 
                                                        name="email"
                                                        value={newUser.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Numéro de téléphone</Form.Label>
                                                    <Form.Control 
                                                        type="tel" 
                                                        name="num_telephone"
                                                        value={newUser.num_telephone}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Nom d'utilisateur</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="username"
                                                        value={newUser.username}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Mot de passe</Form.Label>
                                                    <InputGroup className="password-input-group">
                                                        <Form.Control 
                                                            type={showPassword ? "text" : "password"}
                                                            name="mot_de_passe"
                                                            value={newUser.mot_de_passe}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                        </Button>
                                                        <Button variant="outline-secondary" onClick={generatePassword}>
                                                            <FontAwesomeIcon icon={faKey} /> Générer
                                                        </Button>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Date de naissance</Form.Label>
                                                    <Form.Control 
                                                        type="date" 
                                                        name="date_naissance"
                                                        value={newUser.date_naissance}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Sexe</Form.Label>
                                                    <Form.Control 
                                                        as="select"
                                                        name="sexe"
                                                        value={newUser.sexe}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="M">Homme</option>
                                                        <option value="F">Femme</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group>
                                            <Form.Label>Adresse</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="adresse"
                                                value={newUser.adresse}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Pôle</Form.Label>
                                                    <Form.Control 
                                                        as="select"
                                                        name="pole"
                                                        value={newUser.pole}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Sélectionnez un pôle</option>
                                                        {poles.map((pole, index) => (
                                                            <option key={index} value={pole}>{pole}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Division</Form.Label>
                                                    <Form.Control 
                                                        as="select"
                                                        name="division"
                                                        value={newUser.division}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Sélectionnez une division</option>
                                                        {divisions.map((division, index) => (
                                                            <option key={index} value={division}>{division}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button type="submit" variant="primary" className="mt-3">
                                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Ajouter l'Utilisateur
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default AddUser;
