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

const AfficherRole = () => {
    const [roles, setRoles] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [deletingRole, setDeletingRole] = useState(null);
    const [newRole, setNewRole] = useState({ nom_role: '' });

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const handleEditRole = (role) => {
        setEditingRole(role);
        setShowEditModal(true);
    };

    const handleUpdateRole = async () => {
        try {
            await axios.put(`http://localhost:8080/api/roles/${editingRole.id_role}`, editingRole);
            fetchRoles();
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    const handleDeleteRole = (role) => {
        setDeletingRole(role);
        setShowDeleteModal(true);
    };

    const confirmDeleteRole = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/roles/${deletingRole.id_role}`);
            fetchRoles();
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting role:', error);
        }
    };

    const handleAddRole = async () => {
        try {
            await axios.post('http://localhost:8080/api/roles', newRole);
            fetchRoles();
            setShowAddModal(false);
            setNewRole({ nom_role: '' });
        } catch (error) {
            console.error('Error adding role:', error);
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
                            <h3 className="fw-bold mb-3">Gestion des Rôles</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Rôles</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h4 className="card-title mb-0">Liste des Rôles</h4>
                                        <Button
                                            variant="primary"
                                            onClick={() => setShowAddModal(true)}
                                            className="btn-lg"
                                        >
                                            <FontAwesomeIcon icon={faPlus} /> Ajouter un rôle
                                        </Button>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nom du Rôle</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {roles.map((role) => (
                                                        <tr key={role.id_role}>
                                                            <td>{role.id_role}</td>
                                                            <td>{role.nom_role}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-primary" onClick={() => handleEditRole(role)}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => handleDeleteRole(role)}>
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

            {/* Add Role Modal */}
            <Modal 
                show={showAddModal} 
                onHide={() => setShowAddModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un nouveau rôle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nom du rôle</Form.Label>
                        <Form.Control
                            type="text"
                            value={newRole.nom_role}
                            onChange={(e) => setNewRole({ ...newRole, nom_role: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddRole}>
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
                    <Modal.Title>Modifier le rôle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nom du rôle</Form.Label>
                        <Form.Control
                            type="text"
                            value={editingRole?.nom_role || ''}
                            onChange={(e) => setEditingRole({ ...editingRole, nom_role: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleUpdateRole}>
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
                    Êtes-vous sûr de vouloir supprimer ce rôle ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteRole}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherRole;
