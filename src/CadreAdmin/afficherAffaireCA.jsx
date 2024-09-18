/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faArrowRight, 
    faInfo, 
    faEdit, 
    faTimes, 
    faPlus
    // Remove faHeart from this import
} from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const TableHeader = ({ columns, sortConfig, requestSort }) => (
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.key} onClick={() => requestSort(column.key)} style={{ textAlign: 'left', cursor: 'pointer' }}>
                    {column.label}
                    {sortConfig.key === column.key && (
                        <i className={`fa fa-sort-${sortConfig.direction}`} style={{ marginLeft: '5px' }} />
                    )}
                </th>
            ))}
            <th>Actions</th>
        </tr>
    </thead>
);

const TableRow = ({ item, onShowModal }) => (
    <tr>
        <td style={{ textAlign: 'left' }}>{item.idAffaire}</td>
        <td style={{ textAlign: 'left' }}>{item.libelle_affaire}</td>
        <td style={{ textAlign: 'left' }}>{item.statusAffaire}</td>
        <td style={{ textAlign: 'left' }}>{item.client.nom_client}</td>
        <td style={{ textAlign: 'left' }}>
            <div className="form-button-action">
                <button type="button" onClick={() => onShowModal('info', item)} className="btn btn-link btn-primary">
                    <FontAwesomeIcon icon={faInfo} />
                </button>
                <button type="button" onClick={() => onShowModal('edit', item)} className="btn btn-link btn-primary">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button type="button" onClick={() => onShowModal('delete', item)} className="btn btn-link btn-danger">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </td>
    </tr>
);

const Breadcrumb = ({ items }) => (
    <ul className="breadcrumbs mb-3">
        {items.map((item, index) => (
            <React.Fragment key={index}>
                <li className={item.icon ? "nav-home" : "nav-item"}>
                    <Link to={item.link}>
                        {item.icon ? <FontAwesomeIcon icon={item.icon} /> : item.text}
                    </Link>
                </li>
                {index < items.length - 1 && (
                    <li className="separator">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </li>
                )}
            </React.Fragment>
        ))}
    </ul>
);

const AfficherAffaire = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedAffaire, setSelectedAffaire] = useState(null);
    const [editedAffaire, setEditedAffaire] = useState(null);
    const [affaires, setAffaires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAffaires();
    }, []);

    const fetchAffaires = async () => {
        try {
            setLoading(true);
            // Update this URL to match your backend URL and port
            const response = await axios.get('http://localhost:8080/api/affaires');
            setAffaires(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching affaires:', err);
            setError('Error fetching affaires');
            setLoading(false);
        }
    };

    const sortedData = useMemo(() => {
        let sortableData = [...affaires];
        if (sortConfig.key !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [affaires, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleShowModal = (type, affaire) => {
        setModalType(type);
        setSelectedAffaire(affaire);
        setEditedAffaire(affaire);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/affaires/${selectedAffaire.idAffaire}`);
            fetchAffaires(); // Refresh the list after deletion
            handleCloseModal();
        } catch (err) {
            setError('Error deleting affaire');
        }
    };

    const handleEditChange = (e) => {
        setEditedAffaire({ ...editedAffaire, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async () => {
        try {
            await axios.put(`/api/affaires/${editedAffaire.idAffaire}`, editedAffaire);
            fetchAffaires(); // Refresh the list after edit
            handleCloseModal();
        } catch (err) {
            setError('Error updating affaire');
        }
    };

    const columns = [
        { key: 'idAffaire', label: 'ID Affaire' },
        { key: 'libelle_affaire', label: 'Libellé Affaire' },
        { key: 'statusAffaire', label: 'Status' },
        { key: 'client.nom', label: 'Client' },
    ];

    const breadcrumbItems = [
        { icon: faHome, link: "/HomeCA" },
        { text: "Gestion des Affaires", link: "/gestion-affaires" },
        { text: "Liste des affaires", link: "#" }
    ];

    const EditForm = ({ affaire, onChange }) => {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="idAffaire" className="form-label">ID Affaire</label>
                    <input type="text" className="form-control" id="idAffaire" name="idAffaire" value={affaire.idAffaire} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="libelle_affaire" className="form-label">Libellé Affaire</label>
                    <input type="text" className="form-control" id="libelle_affaire" name="libelle_affaire" value={affaire.libelle_affaire} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="statusAffaire" className="form-label">Status</label>
                    <input type="text" className="form-control" id="statusAffaire" name="statusAffaire" value={affaire.statusAffaire} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="client" className="form-label">Client</label>
                    <input type="text" className="form-control" id="client" name="client" value={affaire.client.nom} onChange={onChange} />
                </div>
            </form>
        );
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Gestion des Affaires</h3>
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h4 className="card-title">Liste des affaires de pole Batiment, VRD </h4>
                                            <Link to="/AddAffaireCA" className="btn btn-primary btn-round ms-auto">
                                                <FontAwesomeIcon icon={faPlus} />
                                                &nbsp;&nbsp;Ajouter une affaire
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            {loading ? (
                                                <p>Loading...</p>
                                            ) : error ? (
                                                <p>{error}</p>
                                            ) : (
                                                <table className="table table-striped table-hover mt-3">
                                                    <TableHeader columns={columns} sortConfig={sortConfig} requestSort={requestSort} />
                                                    <tbody>
                                                        {sortedData.map((item) => (
                                                            <TableRow key={item.idAffaire} item={item} onShowModal={handleShowModal} />
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalType === 'delete' && 'Supprimer l\'affaire'}
                        {modalType === 'edit' && 'Modifier l\'affaire'}
                        {modalType === 'info' && 'Détails de l\'affaire'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'delete' && (
                        <p>Êtes-vous sûr de vouloir supprimer l'affaire "{selectedAffaire?.libelle_affaire}"?</p>
                    )}
                    {modalType === 'edit' && selectedAffaire && (
                        <EditForm 
                            affaire={editedAffaire || selectedAffaire} 
                            onChange={handleEditChange}
                        />
                    )}
                    {modalType === 'info' && selectedAffaire && (
                        <div>
                            <p><strong>ID:</strong> {selectedAffaire.idAffaire}</p>
                            <p><strong>Libellé:</strong> {selectedAffaire.libelle_affaire}</p>
                            <p><strong>Status:</strong> {selectedAffaire.statusAffaire}</p>
                            <p><strong>Client:</strong> {selectedAffaire.client.nom}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {modalType === 'delete' && (
                        <>
                            <Button variant="danger" onClick={handleDelete}>
                                Supprimer
                            </Button>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Annuler
                            </Button>
                        </>
                    )}
                    {modalType === 'edit' && (
                        <>
                            <Button variant="primary" onClick={handleEditSubmit}>
                                Enregistrer les modifications
                            </Button>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Annuler
                            </Button>
                        </>
                    )}
                    {modalType === 'info' && (
                        <>
                            <Button variant="primary" onClick={() => window.location.href = '/AfficherMissionCA'}>
                                Voir les missions
                            </Button>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Fermer
                            </Button>
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherAffaire;
