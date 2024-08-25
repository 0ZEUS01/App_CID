/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const AddMission = () => {
    const [addQuantite, setAddQuantite] = useState('');
    const [addUnite, setAddUnite] = useState('1');
    const [addPrixUnitaire, setAddPrixUnitaire] = useState('');
    const [addPrixTotal, setAddPrixTotal] = useState('');

    const handleForfaitChangeAdd = (e) => {
        const value = e.target.value;
        setAddUnite(value);
        setAddQuantite('');
        setAddPrixUnitaire('');
        setAddPrixTotal('');
    };

    const handleAddQuantiteChange = (e) => {
        const value = e.target.value;
        setAddQuantite(value);
        setAddPrixTotal(value * addPrixUnitaire);
    };

    const handleAddPrixUnitaireChange = (e) => {
        const value = e.target.value;
        setAddPrixUnitaire(value);
        setAddPrixTotal(addQuantite * value);
    };

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
                                                <a href="/AddAffaireCA">
                                                    <span className="sub-item">Ajouter une nouvelle Affaire</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/afficherAffaireCA">
                                                    <span className="sub-item">Liste des affaires</span>
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
                                                    <label htmlFor="addUnite" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Unite</label>
                                                    <select
                                                        className="form-select form-control"
                                                        id="addUnite"
                                                        value={addUnite}
                                                        onChange={handleForfaitChangeAdd}
                                                    >
                                                        <option value="1">Forfait</option>
                                                        <option value="2">Kilomètre</option>
                                                        <option value="3">Mètre</option>
                                                        <option value="4">Mètre cube</option>
                                                        <option value="4">Mètre carré</option>
                                                    </select>
                                                </div>

                                                {addUnite !== '1' && (
                                                    <>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor="addQuantite" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Quantite</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="addQuantite"
                                                                placeholder="Entrer la quantite"
                                                                value={addQuantite}
                                                                onChange={handleAddQuantiteChange}
                                                            />
                                                        </div>
                                                        <div className="mb-3 col-md-6 form-group">
                                                            <label htmlFor="addPrixUnitaire" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Prix unitaire</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="addPrixUnitaire"
                                                                placeholder="Entrer le prix unitaire"
                                                                value={addPrixUnitaire}
                                                                onChange={handleAddPrixUnitaireChange}
                                                            />
                                                        </div>
                                                    </>
                                                )}

                                                <div className="mb-3 col-md-6 form-group">
                                                    <label htmlFor="addPrixTotal" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Prix total</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="addPrixTotal"
                                                        placeholder="Entrer le prix total"
                                                        value={addPrixTotal}
                                                        disabled={addUnite !== '1'}
                                                        readOnly={addUnite !== '1'}
                                                        onChange={(e) => setAddPrixTotal(e.target.value)}
                                                    />
                                                </div>

                                                <div className='form-group' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                                    <button className="btn btn-primary">Ajouter</button>
                                                    <button className="btn btn-black btn-border">Vider</button>
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

export default AddMission;
