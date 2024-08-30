import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faArrowRight,
    faEdit,
    faTimes,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/sideBar';
import MainHeader from '../components/mainHeader';
import Footer from '../components/footer';

const AfficherClient = () => {
    const [clients, setClients] = useState([
        { id_client: 1, nom_client: 'Maroc Telecom', pays_nom: 'Maroc', id_pays: 1 },
        { id_client: 2, nom_client: 'Royal Air Maroc', pays_nom: 'Maroc', id_pays: 1 },
        { id_client: 3, nom_client: 'OCP Group', pays_nom: 'Maroc', id_pays: 1 },
        { id_client: 4, nom_client: 'Attijariwafa Bank', pays_nom: 'Maroc', id_pays: 1 },
        { id_client: 5, nom_client: 'BMCE Bank', pays_nom: 'Maroc', id_pays: 1 },
    ]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [newClient, setNewClient] = useState({ nom_client: '', id_pays: '' });
    const [editingClient, setEditingClient] = useState(null);
    const [deletingClient, setDeletingClient] = useState(null);
    const [pays] = useState([
        { id_pays: 1, nom_pays: 'Maroc' },
        { id_pays: 2, nom_pays: 'France' },
        { id_pays: 3, nom_pays: 'Espagne' },
    ]);

    const handleAddClient = () => {
        const newId = Math.max(...clients.map(c => c.id_client)) + 1;
        const newClientWithId = { 
            ...newClient, 
            id_client: newId, 
            pays_nom: pays.find(p => p.id_pays === parseInt(newClient.id_pays))?.nom_pays || ''
        };
        setClients([...clients, newClientWithId]);
        setShowAddModal(false);
        setNewClient({ nom_client: '', id_pays: '' });
    };

    const handleEditClient = () => {
        setClients(clients.map(client => 
            client.id_client === editingClient.id_client ? 
            {...editingClient, pays_nom: pays.find(p => p.id_pays === parseInt(editingClient.id_pays))?.nom_pays || ''} : 
            client
        ));
        setShowEditModal(false);
    };

    const handleDeleteClient = () => {
        setClients(clients.filter(client => client.id_client !== deletingClient.id_client));
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
                            <h3 className="fw-bold mb-3">Gestion des Clients</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Clients</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="card-title">Liste des Clients</h4>
                                            <Button
                                                variant="primary"
                                                onClick={() => setShowAddModal(true)}
                                                className="btn-lg"
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un client
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nom du Client</th>
                                                        <th>Pays</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {clients.map((client) => (
                                                        <tr key={client.id_client}>
                                                            <td>{client.id_client}</td>
                                                            <td>{client.nom_client}</td>
                                                            <td>{client.pays_nom}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-primary" onClick={() => {
                                                                    setEditingClient(client);
                                                                    setShowEditModal(true);
                                                                }}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => {
                                                                    setDeletingClient(client);
                                                                    setShowDeleteModal(true);
                                                                }}>
                                                                    <FontAwesomeIcon icon={faTimes} />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            {/* Add Client Modal */}
            <Modal 
                show={showAddModal} 
                onHide={() => setShowAddModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un nouveau client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nom du client</Form.Label>
                            <Form.Control 
                                type="text"
                                value={newClient.nom_client}
                                onChange={(e) => setNewClient({...newClient, nom_client: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pays</Form.Label>
                            <Form.Control 
                                as="select"
                                value={newClient.id_pays}
                                onChange={(e) => setNewClient({...newClient, id_pays: e.target.value})}
                                required
                            >
                                <option value="">Sélectionnez un pays</option>
                                {pays.map((pays) => (
                                    <option key={pays.id_pays} value={pays.id_pays}>
                                        {pays.nom_pays}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddClient}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Edit Client Modal */}
            <Modal 
                show={showEditModal} 
                onHide={() => setShowEditModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nom du client</Form.Label>
                            <Form.Control 
                                type="text"
                                value={editingClient?.nom_client || ''}
                                onChange={(e) => setEditingClient({...editingClient, nom_client: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pays</Form.Label>
                            <Form.Control 
                                as="select"
                                value={editingClient?.id_pays || ''}
                                onChange={(e) => setEditingClient({...editingClient, id_pays: e.target.value})}
                                required
                            >
                                <option value="">Sélectionnez un pays</option>
                                {pays.map((pays) => (
                                    <option key={pays.id_pays} value={pays.id_pays}>
                                        {pays.nom_pays}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleEditClient}>
                        Sauvegarder
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal 
                show={showDeleteModal} 
                onHide={() => setShowDeleteModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmer la suppression</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Êtes-vous sûr de vouloir supprimer le client "{deletingClient?.nom_client}" ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={handleDeleteClient}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherClient;
