import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faArrowRight,
    faEdit,
    faTimes,
    faPlus,
    faInfoCircle,
    faSort,
    faSortUp,
    faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import MainHeader from '../components/mainHeader';
import Footer from '../components/footer';

const AfficherUser = () => {
    const [users, setUsers] = useState([]);
    const [poles, setPoles] = useState([]);
    const [divisions, setDivisions] = useState([]);
    const [pays, setPays] = useState([]);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [allDivisions, setAllDivisions] = useState([]);
    const [filteredDivisions, setFilteredDivisions] = useState([]);
    const [emailValid, setEmailValid] = useState(null);
    const [usernameValid, setUsernameValid] = useState(null);

    useEffect(() => {
        fetchUsers();
        fetchPoles();
        fetchDivisions();
        fetchPays();
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/api/utilisateurs');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPoles = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/poles');
            setPoles(response.data);
        } catch (error) {
            console.error('Error fetching poles:', error);
        }
    };

    const fetchDivisions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/divisions');
            setAllDivisions(response.data);
        } catch (error) {
            console.error('Error fetching divisions:', error);
        }
    };

    const fetchPays = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/pays');
            setPays(response.data);
        } catch (error) {
            console.error('Error fetching pays:', error);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleShowDetails = (user) => {
        setSelectedUser(user);
        setShowDetailsModal(true);
    };

    const handleShowEdit = (user) => {
        setSelectedUser({
            ...user,
            pole: user.pole ? user.pole.id_pole.toString() : '',
            division: user.division ? user.division.id_division.toString() : '',
            originalEmail: user.email,
            originalUsername: user.username
        });
        const relatedDivisions = allDivisions.filter(division => division.pole.id_pole === user.pole.id_pole);
        setFilteredDivisions(relatedDivisions);
        setEmailValid(null);
        setUsernameValid(null);
        setShowEditModal(true);
    };

    const handleShowDelete = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleEditUser = async () => {
        if (emailValid === false || usernameValid === false) {
            // Show an error message or prevent form submission
            return;
        }

        try {
            const userToUpdate = {
                ...selectedUser,
                pole: selectedUser.pole ? { id_pole: parseInt(selectedUser.pole) } : null,
                division: selectedUser.division ? { id_division: parseInt(selectedUser.division) } : null,
                pays: selectedUser.pays ? { id_pays: parseInt(selectedUser.pays) } : null
            };
            await axios.put(`http://localhost:8080/api/utilisateurs/${selectedUser.id_utilisateur}`, userToUpdate);
            fetchUsers();
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteUser = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/utilisateurs/${selectedUser.id_utilisateur}`);
            fetchUsers();
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (columnName) => {
        if (sortConfig.key === columnName) {
            return sortConfig.direction === 'ascending' ? faSortUp : faSortDown;
        }
        return faSort;
    };

    const sortedUsers = useMemo(() => {
        let sortableUsers = [...users];
        if (sortConfig.key !== null) {
            sortableUsers.sort((a, b) => {
                if (sortConfig.key === 'nom_complet') {
                    // Sort by last name
                    if (a.nom.toLowerCase() < b.nom.toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a.nom.toLowerCase() > b.nom.toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                } else {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                }
            });
        }
        return sortableUsers;
    }, [users, sortConfig]);

    const filteredUsers = useMemo(() => {
        return sortedUsers.filter(user => {
            const searchString = searchTerm.toLowerCase();
            const fullName = `${user.nom} ${user.prenom}`.toLowerCase();
            const sexeMatch = 
                (user.sexe === 'M' && ('homme'.includes(searchString) || 'male'.includes(searchString))) ||
                (user.sexe === 'F' && ('femme'.includes(searchString) || 'female'.includes(searchString)));
            
            return (
                fullName.includes(searchString) ||
                user.nom.toLowerCase().includes(searchString) ||
                user.prenom.toLowerCase().includes(searchString) ||
                sexeMatch ||
                (user.pole && user.pole.libelle_pole.toLowerCase().includes(searchString)) ||
                (user.division && user.division.nom_division.toLowerCase().includes(searchString))
            );
        });
    }, [sortedUsers, searchTerm]);

    const renderTableContent = () => {
        if (isLoading) {
            return (
                <tr>
                    <td colSpan="5" className="text-center">Chargement...</td>
                </tr>
            );
        }

        if (users.length === 0) {
            return (
                <tr>
                    <td colSpan="5" className="text-center">
                        <Alert variant="info">
                            Aucun utilisateur n'existe dans la base de données.
                        </Alert>
                    </td>
                </tr>
            );
        }

        if (filteredUsers.length === 0) {
            return (
                <tr>
                    <td colSpan="5" className="text-center">
                        <Alert variant="warning">
                            Aucun utilisateur ne correspond à la recherche "{searchTerm}".
                        </Alert>
                    </td>
                </tr>
            );
        }

        return filteredUsers.map((user) => (
            <tr key={user.id_utilisateur}>
                <td>{`${user.nom} ${user.prenom}`}</td>
                <td>{user.sexe === 'M' ? 'Homme' : 'Femme'}</td>
                <td>{user.pole ? user.pole.libelle_pole : 'N/A'}</td>
                <td>{user.division ? user.division.nom_division : 'N/A'}</td>
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
        ));
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'pole') {
            const selectedPoleId = parseInt(value);
            const relatedDivisions = allDivisions.filter(division => division.pole.id_pole === selectedPoleId);
            setFilteredDivisions(relatedDivisions);
            setSelectedUser(prevState => ({ 
                ...prevState, 
                pole: value,
                division: '' // Clear the division when pole changes
            }));
        } else {
            setSelectedUser(prevState => ({ ...prevState, [name]: value }));
        }

        if (name === 'email') {
            validateEmail(value);
        }

        if (name === 'username') {
            validateUsername(value);
        }
    };

    const validateEmail = async (email) => {
        if (email.length > 0 && email !== selectedUser.originalEmail) {
            try {
                const response = await axios.get(`http://localhost:8080/api/utilisateurs/check-email?email=${email}`);
                setEmailValid(response.data);
            } catch (error) {
                console.error('Error validating email:', error);
                setEmailValid(false);
            }
        } else {
            setEmailValid(null);
        }
    };

    const validateUsername = async (username) => {
        if (username.length > 0 && username !== selectedUser.originalUsername) {
            try {
                const response = await axios.get(`http://localhost:8080/api/utilisateurs/check-username?username=${username}`);
                setUsernameValid(response.data);
            } catch (error) {
                console.error('Error validating username:', error);
                setUsernameValid(false);
            }
        } else {
            setUsernameValid(null);
        }
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader onSearch={handleSearch} />
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
                                                        <th onClick={() => requestSort('nom_complet')}>
                                                            Nom complet <FontAwesomeIcon icon={getSortIcon('nom_complet')} />
                                                        </th>
                                                        <th onClick={() => requestSort('sexe')}>
                                                            Sexe <FontAwesomeIcon icon={getSortIcon('sexe')} />
                                                        </th>
                                                        <th onClick={() => requestSort('pole.libelle_pole')}>
                                                            Pôle <FontAwesomeIcon icon={getSortIcon('pole.libelle_pole')} />
                                                        </th>
                                                        <th onClick={() => requestSort('division.nom_division')}>
                                                            Division <FontAwesomeIcon icon={getSortIcon('division.nom_division')} />
                                                        </th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {renderTableContent()}
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
                            <p><strong>Pôle:</strong> {selectedUser.pole ? selectedUser.pole.libelle_pole : 'N/A'}</p>
                            <p><strong>Division:</strong> {selectedUser.division ? selectedUser.division.nom_division : 'N/A'}</p>
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
                                    name="email"
                                    value={selectedUser.email}
                                    onChange={handleEditInputChange}
                                    isValid={emailValid === true}
                                    isInvalid={emailValid === false}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Cet email est déjà utilisé.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nom d'utilisateur</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="username"
                                    value={selectedUser.username}
                                    onChange={handleEditInputChange}
                                    isValid={usernameValid === true}
                                    isInvalid={usernameValid === false}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Ce nom d'utilisateur est déjà pris.
                                </Form.Control.Feedback>
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
                                    name="pole"
                                    value={selectedUser.pole}
                                    onChange={handleEditInputChange}
                                >
                                    <option value="">Sélectionnez un pôle</option>
                                    {poles.map((pole) => (
                                        <option key={pole.id_pole} value={pole.id_pole.toString()}>{pole.libelle_pole}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Division</Form.Label>
                                <Form.Control 
                                    as="select"
                                    name="division"
                                    value={selectedUser.division}
                                    onChange={handleEditInputChange}
                                    disabled={!selectedUser.pole}
                                >
                                    <option value="">Sélectionnez une division</option>
                                    {filteredDivisions.map((division) => (
                                        <option key={division.id_division} value={division.id_division.toString()}>{division.nom_division}</option>
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
                    <Button variant="primary" onClick={handleEditUser} disabled={emailValid === false || usernameValid === false}>
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