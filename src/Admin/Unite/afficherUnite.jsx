import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faArrowRight, 
    faEdit, 
    faTimes,
    faPlus,
    faHeart
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/sideBar';
import MainHeader from '../components/mainHeader';

const AfficherUnite = () => {
    const [unites, setUnites] = useState([
        { id: 1, libelle: 'Forfait' },
        { id: 2, libelle: 'Kilomètre' },
        { id: 3, libelle: 'Mètre' },
        { id: 4, libelle: 'Mètre cube' },
        { id: 5, libelle: 'Mètre carré' }
    ]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingUnite, setEditingUnite] = useState(null);
    const [deletingUnite, setDeletingUnite] = useState(null);
    const [newUnite, setNewUnite] = useState('');

    const handleEditUnite = (unite) => {
        setEditingUnite(unite);
        setShowEditModal(true);
    };

    const handleUpdateUnite = () => {
        setUnites(unites.map(unite => 
            unite.id === editingUnite.id ? editingUnite : unite
        ));
        setShowEditModal(false);
    };

    const handleDeleteUnite = (unite) => {
        setDeletingUnite(unite);
        setShowDeleteModal(true);
    };

    const confirmDeleteUnite = () => {
        setUnites(unites.filter(unite => unite.id !== deletingUnite.id));
        setShowDeleteModal(false);
    };

    const handleAddUnite = () => {
        if (newUnite.trim()) {
            setUnites([...unites, { id: unites.length + 1, libelle: newUnite.trim() }]);
            setNewUnite('');
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
                                    <div className="card-header">
                                        <h4 className="card-title">Liste des Unités</h4>
                                        <div className="d-flex align-items-center mt-3">
                                            <input 
                                            style={{marginRight:15}}
                                                type="text" 
                                                value={newUnite}
                                                onChange={(e) => setNewUnite(e.target.value)}
                                                placeholder="Nouvelle unité"
                                                className="form-control flex-grow-1 mr-2"
                                            />
                                            <Button 
                                                variant="primary" 
                                                onClick={handleAddUnite}
                                                className="btn-lg"
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter une unité
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
                                                    {unites.map((unite) => (
                                                        <tr key={unite.id}>
                                                            <td>{unite.id}</td>
                                                            <td>{unite.libelle}</td>
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
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container-fluid d-flex justify-content-between">
                            <nav className="pull-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/Alyaeessiba">
                                            Alyae Essiba
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/0ZEUS01"> Yahya Zini </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright">
                                2024, made with <FontAwesomeIcon icon={faHeart} className="heart text-info" /> by
                                <a href="http://cid.co.ma/"> CID</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier l'unité</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                        type="text" 
                        className="form-control"
                        value={editingUnite?.libelle || ''}
                        onChange={(e) => setEditingUnite({...editingUnite, libelle: e.target.value})}
                    />
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
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
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
