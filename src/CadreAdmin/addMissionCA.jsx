/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const AddAffaire = () => {
    const [forfait, setForfait] = useState(1); // Default to "Oui"
    const [quantite, setQuantite] = useState('');
    const [prixUnitaire, setPrixUnitaire] = useState('');
    const [prixTotal, setPrixTotal] = useState('');
    const [principalPercentage, setPrincipalPercentage] = useState('');
    const [secondaryPercentages, setSecondaryPercentages] = useState([]);
    const [selectedDivisions, setSelectedDivisions] = useState([]);
    const [error, setError] = useState('');

    const divisions = [
        { value: 1, label: 'AUTOROUTES' },
        { value: 2, label: 'RAILS' },
        { value: 3, label: 'ROUTES' },
        { value: 4, label: 'OUVRAGES D’ART' },
        { value: 5, label: 'ASSISTANCE TECHNIQUE' },
        { value: 6, label: 'PLANIFICATION ET MOBILITE' },
        { value: 7, label: 'GRANDS BARRAGES' }
    ];

    const handleForfaitChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setForfait(value);
        if (value === 1) { // "Oui" selected
            setQuantite('');
            setPrixUnitaire('');
        } else { // "Non" selected
            setPrixTotal('');
        }
    };

    const handleQuantiteChange = (e) => {
        const value = e.target.value;
        setQuantite(value);
        setPrixTotal(value * prixUnitaire);
    };

    const handlePrixUnitaireChange = (e) => {
        const value = e.target.value;
        setPrixUnitaire(value);
        setPrixTotal(quantite * value);
    };

    const handlePrincipalChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 100) {
            setError("Le pourcentage ne peut pas dépasser 100%");
        } else {
            setError('');
            setPrincipalPercentage(value);
        }
    };

    const handleSecondaryChange = (index, value) => {
        const updatedPercentages = [...secondaryPercentages];
        updatedPercentages[index] = value;
        const totalPercentage = principalPercentage + updatedPercentages.reduce((sum, val) => sum + val, 0);

        if (totalPercentage > 100) {
            setError("Le pourcentage total ne peut pas dépasser 100%");
        } else {
            setError('');
            setSecondaryPercentages(updatedPercentages);
        }
    };

    const handleDivisionSelect = (e) => {
        const selectedValue = parseInt(e.target.value);
        const selectedDivision = divisions.find(division => division.value === selectedValue);
        if (selectedDivision && !selectedDivisions.includes(selectedDivision)) {
            setSelectedDivisions([...selectedDivisions, selectedDivision]);
            setSecondaryPercentages([...secondaryPercentages, 0]); // Add a new percentage input
        }
    };

    const remainingPercentage = 100 - (principalPercentage + secondaryPercentages.reduce((sum, val) => sum + val, 0));

    return (
        <div>
            <div className="wrapper">
                {/* Sidebar */}
                <div className="sidebar" data-background-color="dark">
                    <div className="sidebar-logo">
                        {/* Logo Header */}
                        <div className="logo-header" data-background-color="dark">
                            <a href="/" className="logo">
                                <img src="assets/img/logo.png" alt="navbar brand" className="navbar-brand" height={65} />
                            </a>
                            <div className="nav-toggle">
                                <button className="btn btn-toggle toggle-sidebar">
                                    <i className="gg-menu-right" />
                                </button>
                                <button className="btn btn-toggle sidenav-toggler">
                                    <i className="gg-menu-left" />
                                </button>
                            </div>
                            <button className="topbar-toggler more">
                                <i className="gg-more-vertical-alt" />
                            </button>
                        </div>
                        {/* End Logo Header */}
                    </div>
                    <div className="sidebar-wrapper scrollbar scrollbar-inner">
                        <div className="sidebar-content">
                            <ul className="nav nav-secondary">
                                <li className="nav-item active">
                                    <a data-bs-toggle="collapse" href="/" className="collapsed" aria-expanded="false">
                                        <i className="fas fa-home" />
                                        <p>Accueil</p>
                                    </a>
                                </li>
                                <li className="nav-section">
                                    <span className="sidebar-mini-icon">
                                        <i className="fa fa-ellipsis-h" />
                                    </span>
                                    <h4 className="text-section">Components</h4>
                                </li>
                                <li className="nav-item">
                                    <a data-bs-toggle="collapse" href="#base">
                                        <i className="fas fa-layer-group" />
                                        <p>Gestion des Affaire</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="base">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <a href="/AddAffaire">
                                                    <span className="sub-item">Ajouter une nouvelle Affaire</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/afficherAffaire">
                                                    <span className="sub-item">La liste des affaires</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
                <div className="main-panel">
                    <div className="main-header">
                        <div className="main-header-logo">
                            {/* Logo Header */}
                            <div className="logo-header" data-background-color="dark">
                                <a href="index.html" className="logo">
                                    <img src="assets/img/logo.png" alt="navbar brand" className="navbar-brand" height={65} />
                                </a>
                                <div className="nav-toggle">
                                    <button className="btn btn-toggle toggle-sidebar">
                                        <i className="gg-menu-right" />
                                    </button>
                                    <button className="btn btn-toggle sidenav-toggler">
                                        <i className="gg-menu-left" />
                                    </button>
                                </div>
                                <button className="topbar-toggler more">
                                    <i className="gg-more-vertical-alt" />
                                </button>
                            </div>
                            {/* End Logo Header */}
                        </div>
                        {/* Navbar Header */}
                        <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
                            <div className="container-fluid">
                                <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn btn-search pe-1">
                                                <i className="fa fa-search search-icon" />
                                            </button>
                                        </div>
                                        <input type="text" placeholder="Search ..." className="form-control" />
                                    </div>
                                </nav>
                                <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                                    <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                                            <i className="fa fa-search" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-search animated fadeIn">
                                            <form className="navbar-left navbar-form nav-search">
                                                <div className="input-group">
                                                    <input type="text" placeholder="Search ..." className="form-control" />
                                                </div>
                                            </form>
                                        </ul>
                                    </li>
                                    <li className="nav-item topbar-icon dropdown hidden-caret">
                                        <a className="nav-link" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                                            <i className="fas fa-layer-group" />
                                        </a>
                                        <div className="dropdown-menu quick-actions animated fadeIn">
                                            <div className="quick-actions-header">
                                                <span className="title mb-1">Quick Actions</span>
                                                <span className="subtitle op-7">Shortcuts</span>
                                            </div>
                                            <div className="quick-actions-scroll scrollbar-outer">
                                                <div className="quick-actions-items">
                                                    <div className="row m-0">
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-danger rounded-circle">
                                                                    <i className="far fa-calendar-alt" />
                                                                </div>
                                                                <span className="text">Calendar</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-warning rounded-circle">
                                                                    <i className="fas fa-map" />
                                                                </div>
                                                                <span className="text">Maps</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-info rounded-circle">
                                                                    <i className="fas fa-file-excel" />
                                                                </div>
                                                                <span className="text">Reports</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-success rounded-circle">
                                                                    <i className="fas fa-envelope" />
                                                                </div>
                                                                <span className="text">Emails</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-primary rounded-circle">
                                                                    <i className="fas fa-file-invoice-dollar" />
                                                                </div>
                                                                <span className="text">Invoice</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-secondary rounded-circle">
                                                                    <i className="fas fa-credit-card" />
                                                                </div>
                                                                <span className="text">Payments</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item topbar-user dropdown hidden-caret">
                                        <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                                            <div className="avatar-sm">
                                                <img src="../assets/img/alyae.jpg" alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                            <span className="profile-username">
                                                <span className="op-7">Hi,</span>
                                                <span className="fw-bold">Alyae</span>
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-user animated fadeIn">
                                            <div className="dropdown-user-scroll scrollbar-outer">
                                                <li>
                                                    <div className="user-box">
                                                        <div className="avatar-lg">
                                                            <img src="../assets/img/alyae.jpg" alt="image profile" className="avatar-img rounded" />
                                                        </div>
                                                        <div className="u-text">
                                                            <h4>Alyae</h4>
                                                            <p className="text-muted">Alyae@gmail.com</p>
                                                            <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">My Profile</a>
                                                    <a className="dropdown-item" href="#">My Balance</a>
                                                    <a className="dropdown-item" href="#">Inbox</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Account Setting</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Logout</a>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* End Navbar */}
                    </div>
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
                                        <a href="/AddAffaire">Ajouter une nouvelle Affaire</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Ajouter les Mission</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="libelleMission" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Libelle de Mission</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="libelleMission"
                                                        placeholder="Entrer le libelle de Mission"
                                                    />
                                                </div>
                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="prixGlobal" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Prix global (TTC) </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="prixGlobal"
                                                        placeholder="Entrer le prix global"
                                                    />
                                                </div>
                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="forfait" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Forfait</label>
                                                    <select
                                                        className="form-select form-control"
                                                        id="forfait"
                                                        value={forfait}
                                                        onChange={handleForfaitChange}
                                                    >
                                                        <option value={1}>Oui</option>
                                                        <option value={2}>Non</option>
                                                    </select>
                                                </div>
                                                {forfait === 2 && (
                                                    <>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor="prixUnitaire" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Prix unitaire</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="prixUnitaire"
                                                                placeholder="Entrer le prix unitaire"
                                                                value={prixUnitaire}
                                                                onChange={handlePrixUnitaireChange}
                                                            />
                                                        </div>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor="quantite" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Quantite</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="quantite"
                                                                placeholder="Entrer la quantite"
                                                                value={quantite}
                                                                onChange={handleQuantiteChange}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="prixTotal" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Prix total</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="prixTotal"
                                                        placeholder="Entrer le prix total"
                                                        value={prixTotal}
                                                        disabled={forfait === 2}
                                                        readOnly={forfait === 2}
                                                    />
                                                </div>
                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="PourcentageDivPrincipale" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Pourcentage de division principale</label>
                                                    <div className="input-group mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Pourcentage de division principale"
                                                            value={principalPercentage}
                                                            onChange={handlePrincipalChange}
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <span className="input-group-text" id="basic-addon2">%</span>
                                                    </div>
                                                </div>

                                                {remainingPercentage < 100 && remainingPercentage > 0 && (
                                                    <div className="mb-3 col-md-6 form-group">
                                                        <label htmlFor="AddDiv" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Nouveau division</label>
                                                        <select
                                                            className="form-select form-control"
                                                            id="AddDiv"
                                                            onChange={handleDivisionSelect}
                                                        >
                                                            {divisions
                                                                .filter(division => !selectedDivisions.includes(division))
                                                                .map(division => (
                                                                    <option key={division.value} value={division.value}>
                                                                        {division.label}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    </div>
                                                )}

                                                {secondaryPercentages.map((percentage, index) => (
                                                    <div className="mb-3 col-md-6 form-group" key={index}>
                                                        <label htmlFor={`PourcentageDivSecondaire${index}`} className="form-label" style={{ textAlign: 'left', display: 'block' }}>Pourcentage de division {selectedDivisions[index].label}</label>
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder={`Pourcentage de division ${selectedDivisions[index].label}`}
                                                                value={percentage}
                                                                onChange={(e) => handleSecondaryChange(index, parseInt(e.target.value))}
                                                                aria-describedby="basic-addon2"
                                                            />
                                                            <span className="input-group-text" id="basic-addon2">%</span>
                                                        </div>
                                                    </div>
                                                ))}

                                                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                                                <div className=' form-group' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                                    <button className="btn btn-primary">Ajouter</button>
                                                    <button className="btn btn-black btn-border">Vider</button>
                                                </div>

                                                <div className="col-12 col-sm-6 col-md-6 col-xl-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <h5><b>Gare LGV Casa Voyageurs</b></h5>
                                                                    <p className="text-muted">Forfait</p>

                                                                </div>
                                                                <h3 className="text-info fw-bold">456,000.00 DH</h3>
                                                            </div>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-info w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                            <div className="d-flex justify-content-between mt-2">
                                                                <p className="text-muted mb-0">Div: Routes</p>
                                                                <p className="text-muted mb-0">342,000.00 DH</p>
                                                                <p className="text-muted mb-0">75%</p>
                                                            </div>
                                                            <br />
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-info w-25" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                            <div className="d-flex justify-content-between mt-2">
                                                                <p className="text-muted mb-0">Div: AT RAF</p>
                                                                <p className="text-muted mb-0">114,000.00 DH</p>
                                                                <p className="text-muted mb-0">25%</p>
                                                            </div>
                                                            <div className="d-flex justify-content-end mt-2">
                                                                <i className='fas fa-edit text-primary'> Modifier</i>&nbsp;&nbsp;
                                                                <i className='fas fa-trash-alt text-danger'> Supprimer</i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6 col-xl-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <h5><b>Gare LGV Rabat Agdal</b></h5>
                                                                    <p className="text-muted">Forfait</p>

                                                                </div>
                                                                <h3 className="text-info fw-bold">342,000.00 DH</h3>
                                                            </div>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-info w-100" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                            <div className="d-flex justify-content-between mt-2">
                                                                <p className="text-muted mb-0">Div: Routes</p>
                                                                <p className="text-muted mb-0">342,000.00 DH</p>
                                                                <p className="text-muted mb-0">100%</p>
                                                            </div>
                                                            <div className="d-flex justify-content-end mt-2">
                                                                <i className='fas fa-edit text-primary'> Modifier</i>&nbsp;&nbsp;
                                                                <i className='fas fa-trash-alt text-danger'> Supprimer</i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                    <button className="btn btn-primary">Appliquer</button>
                                                    <button className="btn btn-black btn-border">Annuler</button>
                                                </div>
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

export default AddAffaire;