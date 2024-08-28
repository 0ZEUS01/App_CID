/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const AfficherMission = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedMission, setSelectedMission] = useState(null);

    const data = [
        { libelle: "Gare LGV Casa Voyageurs", prix: '342,000.00', forfait: 'Oui', division: 'ET', Pourcentage: '70 %' },
        { libelle: "Gare LGV Rabat Agdal", prix: '342,000.00', forfait: 'Oui', division: 'ET', Pourcentage: '100 %' },
        { libelle: "Gare LGV Kénitra", prix: '405,000.00', forfait: 'Oui', division: 'ET', Pourcentage: '90 %' },
        { libelle: "Gare LGV Tanger", prix: '378,000.00', forfait: 'Non', division: 'ET' }
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
    const handleShowModal = (type, mission) => {
        setModalType(type);
        setSelectedMission(mission);
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
                                    <a href="#">List des Mission</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h4 className="card-title">Liste des missiom de l'affaire " Réalisation des études de circulation 4 "</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-striped">
                                            <table className="table table-striped table-hover mt-3">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('libelle')} className={getClassNamesFor('libelle')}>
                                                            Libelle Mission <i className={getClassNamesFor('libelle') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('prix')} className={getClassNamesFor('prix')}>
                                                            Prix Total <i className={getClassNamesFor('prix') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('forfait')} className={getClassNamesFor('forfait')}>
                                                            Forfait <i className={getClassNamesFor('forfait') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('division')} className={getClassNamesFor('division')}>
                                                            Division Principale<i className={getClassNamesFor('division') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th style={{ textAlign: 'left' }} onClick={() => requestSort('Pourcentage')} className={getClassNamesFor('Pourcentage')}>
                                                            Pourcentage de Division Principale <i className={getClassNamesFor('Pourcentage') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                        </th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {visibleData.map((item, index) => (
                                                        <MissionRow
                                                            key={index}
                                                            item={item}
                                                            handleShowModal={handleShowModal}
                                                        />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <MissionModal
                                            showModal={showModal}
                                            handleCloseModal={handleCloseModal}
                                            modalType={modalType}
                                            selectedMission={selectedMission}
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

const MissionRow = ({ item, handleShowModal }) => (
    <tr>
        <td style={{ textAlign: 'left' }}>{item.libelle}</td>
        <td style={{ textAlign: 'left' }}>{item.prix}</td>
        <td style={{ textAlign: 'left' }}>{item.forfait}</td>
        <td style={{ textAlign: 'left' }}>{item.division}</td>
        <td style={{ textAlign: 'left' }}>{item.Pourcentage}</td>
        <td style={{ textAlign: 'left' }}>
            <div className="form-button-action">
                <button type="button" onClick={() => handleShowModal('info', item)} className="btn btn-link btn-primary">
                    <i className="fa icon-information" />
                </button>
                <button type="button" onClick={() => handleShowModal('delete', item)} className="btn btn-link btn-danger">
                    <i className="fa fa-times" />
                </button>
            </div>
        </td>
    </tr>
);

const MissionModal = ({ showModal, handleCloseModal, modalType, selectedMission, handleDelete, handleEdit }) => (
    <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
            <Modal.Title>
                {modalType === 'delete' && 'Delete Mission'}
                {modalType === 'edit' && 'Edit Mission'}
                {modalType === 'info' && 'Details of Mission'}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modalType === 'delete' && (
                <p>Etes-vous sûr de vouloir supprimer cette mission : "{selectedMission?.libelle}"?</p>
            )}
            {modalType === 'edit' && selectedMission && (
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label>Libelle</label>
                        <input type="text" className="form-control" defaultValue={selectedMission.libelle} />
                    </div>
                    <div className="mb-3">
                        <label>Prix</label>
                        <input type="text" className="form-control" defaultValue={selectedMission.prix} />
                    </div>
                    <div className="mb-3">
                        <label>Forfait</label>
                        <select
                            className="form-select form-control"
                            id="forfait"
                            defaultValue={selectedMission.forfait}
                        >
                            <option value={'Oui'}>Oui</option>
                            <option value={'Non'}>Non</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Division</label>
                        <input type="text" className="form-control" defaultValue={selectedMission.division} />
                    </div>
                    <div className="mb-3">
                        <label>Pourcentage</label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={selectedMission.Pourcentage}
                            placeholder={selectedMission.Pourcentage ? '' : 'Percentage not set yet'}
                        />
                    </div>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </form>
            )}

            {modalType === 'info' && selectedMission && (
                <div>
                    <p><strong>Libelle:</strong> {selectedMission.libelle}</p>
                    <p><strong>Prix:</strong> {selectedMission.prix}</p>
                    <p><strong>Forfait:</strong> {selectedMission.forfait}</p>
                    <p><strong>Division:</strong> {selectedMission.division}</p>
                    <p><strong>Pourcentage:</strong> {selectedMission.Pourcentage ? selectedMission.Pourcentage : 'Pourcentage non encore défini'}</p>
                    <Button
                        variant="secondary"
                        onClick={() => window.location.href = '/addDivisionsCD'}>
                        Répartition des tâches
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

export default AfficherMission;
