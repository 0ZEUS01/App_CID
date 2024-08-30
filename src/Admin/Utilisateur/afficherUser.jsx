import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faArrowRight,
    faEdit,
    faTimes,
    faPlus,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import MainHeader from '../components/mainHeader';
import Footer from '../components/footer';

// Assume we have these arrays of Poles and Divisions
const poles = ['Développement', 'Marketing', 'Finance', 'Ressources Humaines'];
const divisions = ['IT', 'Communication', 'Comptabilité', 'Recrutement'];

const AfficherUser = () => {
    const [users, setUsers] = useState([
        { id_utilisateur: 1, prenom: 'Youssef', nom: 'El Amrani', email: 'youssef.elamrani@example.com', num_telephone: '0612345678', username: 'youssefea', mot_de_passe: 'hashed_password', date_naissance: '1990-05-15', sexe: 'M', adresse: '123 Rue Hassan II, Casablanca', pole: 'Développement', division: 'IT' },
        { id_utilisateur: 2, prenom: 'Fatima', nom: 'Benali', email: 'fatima.benali@example.com', num_telephone: '0623456789', username: 'fatimab', mot_de_passe: 'hashed_password', date_naissance: '1988-09-22', sexe: 'F', adresse: '45 Avenue Mohammed V, Rabat', pole: 'Marketing', division: 'Communication' },
        { id_utilisateur: 3, prenom: 'Mohammed', nom: 'Tazi', email: 'mohammed.tazi@example.com', num_telephone: '0634567890', username: 'mohammedt', mot_de_passe: 'hashed_password', date_naissance: '1995-03-10', sexe: 'M', adresse: '78 Boulevard Zerktouni, Marrakech', pole: 'Finance', division: 'Comptabilité' },
    ]);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowDetails = (user) => {
        setSelectedUser(user);
        setShowDetailsModal(true);
    };

    const handleShowEdit = (user) => {
        setSelectedUser({...user});
        setShowEditModal(true);
    };

    const handleShowDelete = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleEditUser = () => {
        setUsers(users.map(user => 
            user.id_utilisateur === selectedUser.id_utilisateur ? selectedUser : user
        ));
        setShowEditModal(false);
    };

    const handleDeleteUser = () => {
        setUsers(users.filter(user => user.id_utilisateur !== selectedUser.id_utilisateur));
        setShowDeleteModal(false);
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Gestion des Utilisateurs</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Utilisateurs</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Liste des Utilisateurs</h4>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Link to="/addUser" className="btn btn-primary btn-lg">
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un utilisateur
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>Nom complet</th>
                                                        <th>Sexe</th>
                                                        <th>Pôle</th>
                                                        <th>Division</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user) => (
                                                        <tr key={user.id_utilisateur}>
                                                            <td>{`${user.prenom} ${user.nom}`}</td>
                                                            <td>{user.sexe === 'M' ? 'Homme' : 'Femme'}</td>
                                                            <td>{user.pole}</td>
                                                            <td>{user.division}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-info" onClick={() => handleShowDetails(user)}>
                                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                                </Button>
                                                                <Button variant="link" className="btn-primary" onClick={() => handleShowEdit(user)}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => handleShowDelete(user)}>
                                                                    <FontAwesomeIcon icon={faTimes} />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            {/* User Details Modal */}
            <Modal 
                show={showDetailsModal} 
                onHide={() => setShowDetailsModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Détails de l'utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <div>
                            <p><strong>Nom complet:</strong> {selectedUser.prenom} {selectedUser.nom}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Téléphone:</strong> {selectedUser.num_telephone}</p>
                            <p><strong>Nom d'utilisateur:</strong> {selectedUser.username}</p>
                            <p><strong>Date de naissance:</strong> {selectedUser.date_naissance}</p>
                            <p><strong>Sexe:</strong> {selectedUser.sexe === 'M' ? 'Homme' : 'Femme'}</p>
                            <p><strong>Adresse:</strong> {selectedUser.adresse}</p>
                            <p><strong>Pôle:</strong> {selectedUser.pole}</p>
                            <p><strong>Division:</strong> {selectedUser.division}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Edit User Modal */}
            <Modal 
                show={showEditModal} 
                onHide={() => setShowEditModal(false)}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier l'utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <Form>
                            <Form.Group>
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={selectedUser.prenom}
                                    onChange={(e) => setSelectedUser({...selectedUser, prenom: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nom</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={selectedUser.nom}
                                    onChange={(e) => setSelectedUser({...selectedUser, nom: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    value={selectedUser.email}
                                    onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Numéro de téléphone</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    value={selectedUser.num_telephone}
                                    onChange={(e) => setSelectedUser({...selectedUser, num_telephone: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nom d'utilisateur</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={selectedUser.username}
                                    onChange={(e) => setSelectedUser({...selectedUser, username: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date de naissance</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    value={selectedUser.date_naissance}
                                    onChange={(e) => setSelectedUser({...selectedUser, date_naissance: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sexe</Form.Label>
                                <Form.Control 
                                    as="select"
                                    value={selectedUser.sexe}
                                    onChange={(e) => setSelectedUser({...selectedUser, sexe: e.target.value})}
                                >
                                    <option value="M">Homme</option>
                                    <option value="F">Femme</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Adresse</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={selectedUser.adresse}
                                    onChange={(e) => setSelectedUser({...selectedUser, adresse: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Pôle</Form.Label>
                                <Form.Control 
                                    as="select"
                                    value={selectedUser.pole}
                                    onChange={(e) => setSelectedUser({...selectedUser, pole: e.target.value})}
                                >
                                    {poles.map((pole, index) => (
                                        <option key={index} value={pole}>{pole}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Division</Form.Label>
                                <Form.Control 
                                    as="select"
                                    value={selectedUser.division}
                                    onChange={(e) => setSelectedUser({...selectedUser, division: e.target.value})}
                                >
                                    {divisions.map((division, index) => (
                                        <option key={index} value={division}>{division}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleEditUser}>
                        Sauvegarder
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete User Modal */}
            <Modal 
                show={showDeleteModal} 
                onHide={() => setShowDeleteModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmer la suppression</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Êtes-vous sûr de vouloir supprimer cet utilisateur : {selectedUser?.prenom} {selectedUser?.nom} ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleDeleteUser}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherUser;
