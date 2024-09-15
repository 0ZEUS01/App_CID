import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const AfficherUnite = () => {
    const [unites, setUnites] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingUnite, setEditingUnite] = useState(null);
    const [deletingUnite, setDeletingUnite] = useState(null);
    const [newUnite, setNewUnite] = useState({ nom_unite: '' });

    useEffect(() => {
        fetchUnites();
    }, []);

    const fetchUnites = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/unites');
            setUnites(response.data);
        } catch (error) {
            console.error('Error fetching unites:', error);
        }
    };

    const handleEditUnite = (unite) => {
        setEditingUnite(unite);
        setShowEditModal(true);
    };

    const handleUpdateUnite = async () => {
        try {
            await axios.put(`http://localhost:8080/api/unites/${editingUnite.id}`, editingUnite);
            fetchUnites();
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating unite:', error);
        }
    };

    const handleDeleteUnite = (unite) => {
        setDeletingUnite(unite);
        setShowDeleteModal(true);
    };

    const confirmDeleteUnite = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/unites/${deletingUnite.id}`);
            fetchUnites();
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting unite:', error);
        }
    };

    const handleAddUnite = async () => {
        try {
            await axios.post('http://localhost:8080/api/unites', newUnite);
            fetchUnites();
            setShowAddModal(false);
            setNewUnite({ nom_unite: '' });
        } catch (error) {
            console.error('Error adding unite:', error);
        }
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Gestion des Unités</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Unités</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h4 className="card-title mb-0">Liste des Unités</h4>
                                        <Button
                                            variant="primary"
                                            onClick={() => setShowAddModal(true)}
                                            className="btn-lg"
                                        >
                                            <FontAwesomeIcon icon={faPlus} /> Ajouter une unité
                                        </Button>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nom de l'Unité</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {unites.map((unite) => (
                                                        <tr key={unite.id}>
                                                            <td>{unite.id}</td>
                                                            <td>{unite.nom_unite}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-primary" onClick={() => handleEditUnite(unite)}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => handleDeleteUnite(unite)}>
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

            {/* Add Unite Modal */}
            <Modal 
                show={showAddModal} 
                onHide={() => setShowAddModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une nouvelle unité</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nom de l'unité</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUnite.nom_unite}
                            onChange={(e) => setNewUnite({ ...newUnite, nom_unite: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddUnite}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Edit Modal */}
            <Modal 
                show={showEditModal} 
                onHide={() => setShowEditModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier l'unité</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nom de l'unité</Form.Label>
                        <Form.Control
                            type="text"
                            value={editingUnite?.nom_unite || ''}
                            onChange={(e) => setEditingUnite({ ...editingUnite, nom_unite: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleUpdateUnite}>
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
                    Êtes-vous sûr de vouloir supprimer cette unité ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteUnite}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherUnite;
