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

const AfficherDivision = () => {
    const [divisions, setDivisions] = useState([
        { id: 1, libelle: 'IT' },
        { id: 2, libelle: 'Communication' },
        { id: 3, libelle: 'Comptabilité' },
        { id: 4, libelle: 'Recrutement' }
    ]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingDivision, setEditingDivision] = useState(null);
    const [deletingDivision, setDeletingDivision] = useState(null);
    const [newDivision, setNewDivision] = useState('');

    const handleEditDivision = (division) => {
        setEditingDivision(division);
        setShowEditModal(true);
    };

    const handleUpdateDivision = () => {
        setDivisions(divisions.map(division =>
            division.id === editingDivision.id ? editingDivision : division
        ));
        setShowEditModal(false);
    };

    const handleDeleteDivision = (division) => {
        setDeletingDivision(division);
        setShowDeleteModal(true);
    };

    const confirmDeleteDivision = () => {
        setDivisions(divisions.filter(division => division.id !== deletingDivision.id));
        setShowDeleteModal(false);
    };

    const handleAddDivision = () => {
        if (newDivision.trim()) {
            setDivisions([...divisions, { id: divisions.length + 1, libelle: newDivision.trim() }]);
            setNewDivision('');
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
                            <h3 className="fw-bold mb-3">Gestion des Divisions</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Divisions</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Liste des Divisions</h4>
                                        <div className="d-flex align-items-center mt-3">
                                            <input
                                                style={{marginRight:15}}
                                                type="text"
                                                value={newDivision}
                                                onChange={(e) => setNewDivision(e.target.value)}
                                                placeholder="Nouvelle division"
                                                className="form-control flex-grow-1 mr-2"
                                            />
                                            <Button
                                                variant="primary"
                                                onClick={handleAddDivision}
                                                className="btn-lg"
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter une division
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Libellé</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {divisions.map((division) => (
                                                        <tr key={division.id}>
                                                            <td>{division.id}</td>
                                                            <td>{division.libelle}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-primary" onClick={() => handleEditDivision(division)}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => handleDeleteDivision(division)}>
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

            {/* Edit Modal */}
            <Modal 
                show={showEditModal} 
                onHide={() => setShowEditModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier la division</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        value={editingDivision?.libelle || ''}
                        onChange={(e) => setEditingDivision({ ...editingDivision, libelle: e.target.value })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleUpdateDivision}>
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
                    Êtes-vous sûr de vouloir supprimer cette division ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteDivision}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherDivision;
