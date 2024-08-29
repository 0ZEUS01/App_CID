import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
    const [roles, setRoles] = useState([
        { id: 1, libelle: 'Chef de Projet' },
        { id: 2, libelle: 'Chef de Division' },
        { id: 3, libelle: 'Cadre Administratif' },
        { id: 4, libelle: 'Chef de Pôle' }
    ]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [deletingRole, setDeletingRole] = useState(null);
    const [newRole, setNewRole] = useState('');

    const handleEditRole = (role) => {
        setEditingRole(role);
        setShowEditModal(true);
    };

    const handleUpdateRole = () => {
        setRoles(roles.map(role => 
            role.id === editingRole.id ? editingRole : role
        ));
        setShowEditModal(false);
    };

    const handleDeleteRole = (role) => {
        setDeletingRole(role);
        setShowDeleteModal(true);
    };

    const confirmDeleteRole = () => {
        setRoles(roles.filter(role => role.id !== deletingRole.id));
        setShowDeleteModal(false);
    };

    const handleAddRole = () => {
        if (newRole.trim()) {
            setRoles([...roles, { id: roles.length + 1, libelle: newRole.trim() }]);
            setNewRole('');
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
                                    <div className="card-header">
                                        <h4 className="card-title">Liste des Rôles</h4>
                                        <div className="d-flex align-items-center mt-3">
                                            <input 
                                                type="text" 
                                                value={newRole}
                                                onChange={(e) => setNewRole(e.target.value)}
                                                placeholder="Nouveau rôle"
                                                className="form-control flex-grow-1 mr-2"
                                            />
                                            <Button 
                                                variant="primary" 
                                                onClick={handleAddRole}
                                                className="btn-lg"
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un rôle
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Libellé</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {roles.map((role) => (
                                                        <tr key={role.id}>
                                                            <td>{role.id}</td>
                                                            <td>{role.libelle}</td>
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
                    <input 
                        type="text" 
                        className="form-control"
                        value={editingRole?.libelle || ''}
                        onChange={(e) => setEditingRole({...editingRole, libelle: e.target.value})}
                    />
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
