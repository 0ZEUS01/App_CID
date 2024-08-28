/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react';
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
        <td style={{ textAlign: 'left' }}>{item.code}</td>
        <td style={{ textAlign: 'left' }}>{item.libelle}</td>
        <td style={{ textAlign: 'left' }}>{item.division}</td>
        <td style={{ textAlign: 'left' }}>{item.client}</td>
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

    const data = [
        { code: '202100890', libelle: "Réalisation des études de circulation 4", division: 'ET', client: 'Direction des amenagements hydrauliques', chef: 'Ammari Yousra' },
        { code: '202100891', libelle: 'Etude de la rehabilitation du canal de distribution', division: 'G iu', client: 'Direction des infrastructures urbaines', chef: 'Elidrissi Mohamed' },
        { code: '202100892', libelle: "Etude d'impact environnemental de l'extension de la zone industrielle", division: 'G edd', client: "Direction de l'environnement", chef: 'Rahimi Nour' },
        { code: '202100893', libelle: "Construction de la station d'epuration des eaux usees", division: 'G edd', client: "Ministere de l'environnement", chef: 'Bouziane Samira' },
        { code: '202100894', libelle: 'Amenagement des infrastructures routieres', division: 'G iu', client: "Ministere de l'equipement", chef: 'Benjelloun Yassir' },
        { code: '202100895', libelle: "Rehabilitation du reseau d'assainissement", division: 'G ah', client: "Ministere de l'eau", chef: 'El Hammouchi Noura' },
        { code: '202100896', libelle: "Etude technique pour l'extension de la zone industrielle", division: 'G edd', client: "Ministere de l'industrie", chef: 'El Ouardighi Anas' },
        { code: '202100897', libelle: 'Projet de developpement durable des ressources en eau', division: 'G ah', client: "Ministere de l'eau", chef: 'Jabir Salima' },
        { code: '202100898', libelle: "Construction d'une nouvelle usine de traitement des dechets", division: 'G edd', client: "Ministere de l'environnement", chef: 'Rahmani Fatima' },
        { code: '202100899', libelle: 'Projet de renovation des infrastructures scolaires', division: 'G iu', client: "Ministere de l'education", chef: 'Habibi Soufiane' },
    ];

    const sortedData = useMemo(() => {
        let sortableData = [...data];
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
    }, [data, sortConfig]);

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

    const handleDelete = () => {
        // Perform delete action
        handleCloseModal();
    };

    const handleEditChange = (e) => {
        setEditedAffaire({ ...editedAffaire, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = () => {
        handleEdit(editedAffaire);
        handleCloseModal();
    };

    const handleEdit = (updatedAffaire) => {
        // Perform edit action with updatedAffaire
        console.log('Updated affaire:', updatedAffaire);
        handleCloseModal();
    };

    const columns = [
        { key: 'code', label: 'Code Affaire' },
        { key: 'libelle', label: 'Libelle Affaire' },
        { key: 'division', label: 'Division' },
        { key: 'client', label: 'Client' },
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
                    <label htmlFor="code" className="form-label">Code Affaire</label>
                    <input type="text" className="form-control" id="code" name="code" value={affaire.code} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="libelle" className="form-label">Libelle Affaire</label>
                    <input type="text" className="form-control" id="libelle" name="libelle" value={affaire.libelle} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="division" className="form-label">Division</label>
                    <input type="text" className="form-control" id="division" name="division" value={affaire.division} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="client" className="form-label">Client</label>
                    <input type="text" className="form-control" id="client" name="client" value={affaire.client} onChange={onChange} />
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
                                            <table className="table table-striped table-hover mt-3">
                                                <TableHeader columns={columns} sortConfig={sortConfig} requestSort={requestSort} />
                                                <tbody>
                                                    {sortedData.map((item, index) => (
                                                        <TableRow key={index} item={item} onShowModal={handleShowModal} />
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

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalType === 'delete' && 'Delete Affaire'}
                        {modalType === 'edit' && 'Edit Affaire'}
                        {modalType === 'info' && 'Details of Affaire'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'delete' && (
                        <p>Etes-vous sûr de vouloir supprimer l'affaire "{selectedAffaire?.libelle}"?</p>
                    )}
                    {modalType === 'edit' && selectedAffaire && (
                        <EditForm 
                            affaire={editedAffaire || selectedAffaire} 
                            onChange={handleEditChange}
                        />
                    )}
                    {modalType === 'info' && selectedAffaire && (
                        <div>
                            <p><strong>Code:</strong> {selectedAffaire.code}</p>
                            <p><strong>Libelle:</strong> {selectedAffaire.libelle}</p>
                            <p><strong>Division:</strong> {selectedAffaire.division}</p>
                            <p><strong>Client:</strong> {selectedAffaire.client}</p>
                            <Button
                                variant="secondary"
                                onClick={() => window.location.href = '/AfficherMissionCA'}>
                                View Missions
                            </Button>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {modalType === 'delete' && (
                        <>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                        </>
                    )}
                    {modalType === 'edit' && (
                        <>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleEditSubmit}>
                                Save Changes
                            </Button>
                        </>
                    )}
                    {modalType === 'info' && (
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AfficherAffaire;
