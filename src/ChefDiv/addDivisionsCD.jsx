/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';

const AddDivisions = () => {
    const globalMontant = 378000.00;
    const divisionsList = [
        { id: '1', name: 'AUTOROUTES' },
        { id: '2', name: 'RAILS' },
        { id: '3', name: 'ROUTES' },
        { id: '4', name: 'OUVRAGES D’ART' },
        { id: '5', name: 'ASSISTANCE TECHNIQUE' },
        { id: '6', name: 'PLANIFICATION ET MOBILITE' },
        { id: '7', name: 'GRANDS BARRAGES' },
        { id: '8', name: 'PETITS ET MOYENS BARRAGES' },
        { id: '9', name: 'RESSOURCES EN EAU' },
        { id: '10', name: 'VRD' },
    ];
    const [divisions, setDivisions] = useState([{ divisionId: '', montant: '' }]);
    const [totalMontant, setTotalMontant] = useState(0);
    const [error, setError] = useState('');

    const handleDivisionChange = (index, field, value) => {
        const newDivisions = [...divisions];
        newDivisions[index][field] = value;

        if (field === 'montant') {
            newDivisions[index].montant = parseFloat(value) || '';
        }

        setDivisions(newDivisions);
        calculateTotalMontant(newDivisions);
    };

    const calculateTotalMontant = (divisions) => {
        const total = divisions.reduce((acc, curr) => acc + (parseFloat(curr.montant) || 0), 0);
        setTotalMontant(total);

        if (total > globalMontant) {
            setError('Le montant total ne doit pas dépasser le montant global.');
        } else {
            setError('');
        }

        if (total < globalMontant && newDivisionsAreValid(divisions)) {
            addDivisionField();
        }
    };

    const newDivisionsAreValid = (divisions) => {
        return divisions.every(division => division.divisionId !== '' && division.montant !== '');
    };

    const addDivisionField = () => {
        setDivisions([...divisions, { divisionId: '', montant: '' }]);
    };

    const handleApply = () => {
        if (totalMontant === globalMontant) {
            // Handle the submission logic here
            console.log('Divisions and amounts:', divisions);
        } else {
            setError(`Le montant total doit être égal à ${globalMontant.toFixed(2)}.`);
        }
    };

    const handleSuggestion = (index) => {
        const remainingMontant = globalMontant - totalMontant;
        handleDivisionChange(index, 'montant', remainingMontant.toFixed(2));
    };

    const getAvailableDivisions = (usedDivisions, currentIndex) => {
        const selectedDivisions = divisions.slice(0, currentIndex).map(d => d.divisionId);
        return divisionsList.filter(division => !selectedDivisions.includes(division.id));
    };

    return (
        <div>
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
                                            <div className="card-title" style={{ textAlign: 'left' }}>
                                                Définir les divisions montant à la mission "Gare LGV Tanger" dont le montant : {globalMontant.toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {divisions.map((division, index) => {
                                                const availableDivisions = getAvailableDivisions(divisions.map(d => d.divisionId), index);
                                                return (
                                                    <div className="row" key={index}>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor={`Division-${index}`} className="form-label" style={{ textAlign: 'left', display: 'block' }}>Division</label>
                                                            <select
                                                                className="form-select form-control"
                                                                id={`Division-${index}`}
                                                                value={division.divisionId}
                                                                onChange={(e) => handleDivisionChange(index, 'divisionId', e.target.value)}
                                                            >
                                                                <option value="">Sélectionner une division</option>
                                                                {availableDivisions.map((divisionOption) => (
                                                                    <option key={divisionOption.id} value={divisionOption.id}>
                                                                        {divisionOption.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor={`partDiv-${index}`} className="form-label" style={{ textAlign: 'left', display: 'block' }}>Part de Division (TTC)</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id={`partDiv-${index}`}
                                                                value={division.montant}
                                                                onChange={(e) => handleDivisionChange(index, 'montant', e.target.value)}
                                                                placeholder="Entrer la part de cette division"
                                                            />
                                                            {index === divisions.length - 1 && totalMontant < globalMontant && (
                                                                <small
                                                                    className="form-text text-muted"
                                                                    onClick={() => handleSuggestion(index)}
                                                                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                                >
                                                                    Suggestion: {globalMontant - totalMontant > 0 ? (globalMontant - totalMontant).toFixed(2) : '0.00'}
                                                                </small>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                <button className="btn btn-primary" onClick={handleApply}>Appliquer</button>
                                            </div>
                                            {error && <div className="text-danger mt-3">{error}</div>}
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
                                            <a className="nav-link" href="https://github.com/Alyaeessiba">Alyae Essiba</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://github.com/0ZEUS01">Yahya Zini</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="copyright">
                                    2024, made with <i className="fa fa-heart heart text-info" /> by
                                    <a href="http://cid.co.ma/"> CID</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDivisions;
