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

const AfficherPole = () => {
    const [poles, setPoles] = useState([
        { id: 1, libelle: 'Développement' },
        { id: 2, libelle: 'Marketing' },
        { id: 3, libelle: 'Finance' },
        { id: 4, libelle: 'Ressources Humaines' }
    ]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingPole, setEditingPole] = useState(null);
    const [deletingPole, setDeletingPole] = useState(null);
    const [newPole, setNewPole] = useState('');

    const handleEditPole = (pole) => {
        setEditingPole(pole);
        setShowEditModal(true);
    };

    const handleUpdatePole = () => {
        setPoles(poles.map(pole =>
            pole.id === editingPole.id ? editingPole : pole
        ));
        setShowEditModal(false);
    };

    const handleDeletePole = (pole) => {
        setDeletingPole(pole);
        setShowDeleteModal(true);
    };

    const confirmDeletePole = () => {
        setPoles(poles.filter(pole => pole.id !== deletingPole.id));
        setShowDeleteModal(false);
    };

    const handleAddPole = () => {
        if (newPole.trim()) {
            setPoles([...poles, { id: poles.length + 1, libelle: newPole.trim() }]);
            setNewPole('');
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
                            <h3 className="fw-bold mb-3">Gestion des Pôles</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Gestion des Pôles</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Liste des Pôles</h4>
                                        <div className="d-flex align-items-center mt-3">
                                            <input
                                                style={{marginRight:15}}
                                                type="text"
                                                value={newPole}
                                                onChange={(e) => setNewPole(e.target.value)}
                                                placeholder="Nouveau pôle"
                                                className="form-control flex-grow-1 mr-2"
                                            />
                                            <Button
                                                variant="primary"
                                                onClick={handleAddPole}
                                                className="btn-lg"
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un pôle
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
                                                    {poles.map((pole) => (
                                                        <tr key={pole.id}>
                                                            <td>{pole.id}</td>
                                                            <td>{pole.libelle}</td>
                                                            <td>
                                                                <Button variant="link" className="btn-primary" onClick={() => handleEditPole(pole)}>
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </Button>
                                                                <Button variant="link" className="btn-danger" onClick={() => handleDeletePole(pole)}>
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
                    <Modal.Title>Modifier le pôle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        value={editingPole?.libelle || ''}
                        onChange={(e) => setEditingPole({ ...editingPole, libelle: e.target.value })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleUpdatePole}>
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
                    Êtes-vous sûr de vouloir supprimer ce pôle ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={confirmDeletePole}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherPole;
