/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const AfficherAffaire = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedAffaire, setSelectedAffaire] = useState(null);

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
        { code: '202100899', libelle: 'Projet de renovation des infrastructures scolaires', division: 'G iu', client: "Ministere de l'education", chef: 'Habibi Soufiane' }
    ];

    const sortedData = useMemo(() => {
        let sortableData = [...data];
        if (sortConfig !== null) {
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

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const handleShowModal = (type, affaire) => {
        setModalType(type);
        setSelectedAffaire(affaire);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleDelete = () => {
        // Perform delete action
        handleCloseModal();
    };

    const handleEdit = (e) => {
        e.preventDefault();
        // Perform edit action
        handleCloseModal();
    };

    const visibleData = useMemo(() => {
        // Filter out any rows that should be hidden based on your criteria
        return sortedData;
    }, [sortedData]);

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Gestion des Affaire</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <a href="#">
                                        <i className="icon-home" />
                                    </a>
                                </li>
                                <li className="separator">
                                    <i className="icon-arrow-right" />
                                </li>
                                <li className="nav-item">
                                    <a href="#">Gestion des Affaire</a>
                                </li>
                                <li className="separator">
                                    <i className="icon-arrow-right" />
                                </li>
                                <li className="nav-item">
                                    <a href="#">List des affaire</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h4 className="card-title">Liste des affaires de pole Batiment, VRD </h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-striped">
                                            <table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('code')} className={getClassNamesFor('code')}>
                                                            Code Affaire <i className={getClassNamesFor('code') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('libelle')} className={getClassNamesFor('libelle')}>
                                                            Libelle Affaire <i className={getClassNamesFor('libelle') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('division')} className={getClassNamesFor('division')}>
                                                            Division <i className={getClassNamesFor('division') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('client')} className={getClassNamesFor('client')}>
                                                            Client <i className={getClassNamesFor('client') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {visibleData.map((item, index) => (
                                                        <AffaireRow
                                                            key={index}
                                                            item={item}
                                                            handleShowModal={handleShowModal}
                                                        />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <AffaireModal
                                            showModal={showModal}
                                            handleCloseModal={handleCloseModal}
                                            modalType={modalType}
                                            selectedAffaire={selectedAffaire}
                                            handleDelete={handleDelete}
                                            handleEdit={handleEdit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const AffaireRow = ({ item, handleShowModal }) => (
    <tr>
        <td style={{ textAlign: 'left' }}>{item.code}</td>
        <td style={{ textAlign: 'left' }}>{item.libelle}</td>
        <td style={{ textAlign: 'left' }}>{item.division}</td>
        <td style={{ textAlign: 'left' }}>{item.client}</td>
        <td style={{ textAlign: 'left' }}>
            <div className="form-button-action">
                <button type="button" onClick={() => handleShowModal('info', item)} className="btn btn-link btn-primary">
                    <i className="fa icon-information" />
                </button>
                <button type="button" onClick={() => handleShowModal('edit', item)} className="btn btn-link btn-primary">
                    <i className="fa fa-edit" />
                </button>
                <button type="button" onClick={() => handleShowModal('delete', item)} className="btn btn-link btn-danger">
                    <i className="fa fa-times" />
                </button>
            </div>
        </td>
    </tr>
);

const AffaireModal = ({ showModal, handleCloseModal, modalType, selectedAffaire, handleDelete, handleEdit }) => (
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
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label>Code</label>
                        <input type="text" className="form-control" defaultValue={selectedAffaire.code} />
                    </div>
                    <div className="mb-3">
                        <label>Libelle</label>
                        <input type="text" className="form-control" defaultValue={selectedAffaire.libelle} />
                    </div>
                    <div className="mb-3">
                        <label>Division</label>
                        <input type="text" className="form-control" defaultValue={selectedAffaire.division} />
                    </div>
                    <div className="mb-3">
                        <label>Client</label>
                        <input type="text" className="form-control" defaultValue={selectedAffaire.client} />
                    </div>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </form>
            )}
            {modalType === 'info' && selectedAffaire && (
                <div>
                    <p><strong>Code:</strong> {selectedAffaire.code}</p>
                    <p><strong>Libelle:</strong> {selectedAffaire.libelle}</p>
                    <p><strong>Division:</strong> {selectedAffaire.division}</p>
                    <p><strong>Client:</strong> {selectedAffaire.client}</p>
                    <Button
                        variant="secondary"
                        onClick={() => window.location.href = '/AfficherMissionCD'}>
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
                </>
            )}
            {modalType === 'info' && (
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            )}
        </Modal.Footer>
    </Modal>
);

export default AfficherAffaire;
