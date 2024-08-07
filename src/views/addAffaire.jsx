/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const addAffire = () => (
    <div>
        <div className="wrapper">
            {/* Sidebar */}
            <div className="sidebar" data-background-color="dark">
                <div className="sidebar-logo">
                    {/* Logo Header */}
                    <div className="logo-header" data-background-color="dark">
                        <a href="/" className="logo">
                            <img src="assets/img/logo.svg" alt="navbar brand" className="navbar-brand" height={150} />
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
                                <img src="assets/img/logo.svg" alt="navbar brand" className="navbar-brand" height={150} />
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
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="." role="button" aria-expanded="false" aria-haspopup="true">
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
                                    <a className="nav-link dropdown-toggle" href="." id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-envelope" />
                                    </a>
                                    <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                        <li>
                                            <div className="dropdown-title d-flex justify-content-between align-items-center">
                                                Messages
                                                <a href="." className="small">Mark all as read</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="message-notif-scroll scrollbar-outer">
                                                <div className="notif-center">
                                                    <a href=".">
                                                        <div className="notif-img">
                                                            <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Jimmy Denis</span>
                                                            <span className="block"> How are you ? </span>
                                                            <span className="time">5 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-img">
                                                            <img src="assets/img/chadengle.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Chad</span>
                                                            <span className="block"> Ok, Thanks ! </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-img">
                                                            <img src="assets/img/mlane.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Jhon Doe</span>
                                                            <span className="block">
                                                                Ready for the meeting today...
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-img">
                                                            <img src="assets/img/talha.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Talha</span>
                                                            <span className="block"> Hi, Apa Kabar ? </span>
                                                            <span className="time">17 minutes ago</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item topbar-icon dropdown hidden-caret">
                                    <a className="nav-link dropdown-toggle" href="." id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell" />
                                        <span className="notification">4</span>
                                    </a>
                                    <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                        <li>
                                            <div className="dropdown-title">
                                                You have 4 new notification
                                            </div>
                                        </li>
                                        <li>
                                            <div className="notif-scroll scrollbar-outer">
                                                <div className="notif-center">
                                                    <a href=".">
                                                        <div className="notif-icon notif-primary">
                                                            <i className="fa fa-user-plus" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="block"> New user registered </span>
                                                            <span className="time">5 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-icon notif-success">
                                                            <i className="fa fa-comment" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="block">
                                                                Rahmad commented on Admin
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-img">
                                                            <img src="assets/img/mlane.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Jhon Doe</span>
                                                            <span className="block">
                                                                Ready for the meeting today...
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href=".">
                                                        <div className="notif-icon notif-danger">
                                                            <i className="fa fa-heart" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="block">Ariel liked Admin </span>
                                                            <span className="time">17 minutes ago</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" /></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item topbar-icon dropdown hidden-caret">
                                    <a className="nav-link" data-bs-toggle="dropdown" href="." aria-expanded="false">
                                        <i className="fas fa-layer-group" />
                                    </a>
                                    <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                        <div className="quick-actions-header">
                                            <span className="title mb-1">Quick Actions</span>
                                            <span className="subtitle op-8">Shortcuts</span>
                                        </div>
                                        <div className="quick-actions-scroll scrollbar-outer">
                                            <div className="quick-actions-items">
                                                <div className="row m-0">
                                                    <a className="col-6 col-md-4 p-0" href="components/avatars.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fas fa-file" />
                                                            <span className="text">Generated Report</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="components/buttons.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fa fa-file-excel" />
                                                            <span className="text">Create New</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="components/buttons.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fa fa-file-pdf" />
                                                            <span className="text">Completed</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="components/buttons.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fa fa-file-word" />
                                                            <span className="text">Price Quote</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="components/buttons.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fa fa-file-excel" />
                                                            <span className="text">New Invoice</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="components/buttons.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fa fa-chart-line" />
                                                            <span className="text">Analytics</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item topbar-icon">
                                    <a className="nav-link" href="." data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user-circle" />
                                    </a>
                                    <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                        <div className="quick-actions-header">
                                            <span className="title mb-1">Profile</span>
                                            <span className="subtitle op-8">User</span>
                                        </div>
                                        <div className="quick-actions-scroll scrollbar-outer">
                                            <div className="quick-actions-items">
                                                <div className="row m-0">
                                                    <a className="col-6 col-md-4 p-0" href="profile.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fas fa-id-card" />
                                                            <span className="text">My Profile</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="settings.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fas fa-cog" />
                                                            <span className="text">Settings</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="logout.html">
                                                        <div className="quick-actions-item">
                                                            <i className="fas fa-sign-out-alt" />
                                                            <span className="text">Logout</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <a href="#">Ajouter une nouvelle Affaire</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Ajouter une nouvelle Affaire</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="libelleAffaire" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Libelle de l'affaire</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="libelleAffaire"
                                                    placeholder="Entrer le libelle de l'affaire"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="NbrMarche" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Numéro de marché</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="NbrMarche"
                                                    placeholder="Entrer le Numéro de marché"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="pole" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Pole</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pole"
                                                    placeholder="Entrer le nom de pole"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="division" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Division</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="division"
                                                    placeholder="Entrer le nom de division"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="PrixAffaire" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Mantant total de CID (HT)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="PrixAffaire"
                                                    placeholder="Entrer le Mantant total de CID en DH"
                                                />
                                            </div>
                                            
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="typeAffaire" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Type d'affaire</label>
                                                <select
                                                    class="form-select form-control"
                                                    id="typeAffaire"
                                                >
                                                    <option value={1}>Type Affaire 1</option>
                                                    <option value={2}>Type Affaire 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="typeContrat" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Type de contrat</label>
                                                <select
                                                    class="form-select form-control"
                                                    id="typeContrat"
                                                >
                                                    <option value={1}>Type Contrat 1</option>
                                                    <option value={2}>Type Contrat 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="tauxTVA" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Taux de TVA</label>
                                                <div style={{ marginTop: '15px', textAlign: 'left', display: 'block' }}>
                                                    <input
                                                        type="range"
                                                        id="tauxTVARange"
                                                        name="tauxTVARange"
                                                        min="0"
                                                        max="100"
                                                        step="1"
                                                        onInput={(e) => document.getElementById('tauxTVAInput').value = e.target.value}
                                                        style={{ width: '250px', marginRight: '10px' }}
                                                    />
                                                    <input
                                                        type="number"
                                                        id="tauxTVAInput"
                                                        name="tauxTVAInput"
                                                        min="0"
                                                        max="100"
                                                        step="1"
                                                        defaultValue="50"
                                                        onInput={(e) => document.getElementById('tauxTVARange').value = e.target.value}
                                                        style={{ marginRight: '10px' }}
                                                    />%
                                                </div>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="groupment" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Groupment</label>
                                                <select
                                                    class="form-select form-control"
                                                    id="groupment"
                                                >
                                                    <option value={1}>Oui</option>
                                                    <option value={2}>Non</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="typegroupment" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Type de groupment</label>
                                                <select
                                                    class="form-select form-control"
                                                    id="typegroupment"
                                                >
                                                    <option value={1}>Type groupment 1</option>
                                                    <option value={2}>type groupment 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="dateSignatureConventionGroupment" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Date de signature de convention de groupment</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="dateSignatureConventionGroupment"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="nomMandataireGroupment" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Nom de mandataire de groupment</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nomMandataireGroupment"
                                                    placeholder='Entrer le nom de mandataire de groupment'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="partTotaleMarche" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Part totale de marché (HT)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="partTotaleMarche"
                                                    placeholder='Entrer la part totale de marché en DH'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="partTotaleMarcheDevise" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Part totale de marché de devise (TTC)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="partTotaleMarcheDevise"
                                                    placeholder='Entrer la part totale de marché de devise'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="partCID" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Part de CID (HT)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="partCID"
                                                    placeholder='Entrer la part de CID en DH'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="partCIDDevise" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Part de CID de devise (TCC)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="partCIDDevise"
                                                    placeholder='Entrer la part de CID de devise en DH'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="retenueSource" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Retenue source (TCC)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="retenueSource"
                                                    placeholder='Entrer le Retenue source en DH'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="retenueGarantie" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Retenue garantie (TCC)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="retenueGarantie"
                                                    placeholder='Entrer le Retenue garantie en DH'
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="statut" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Statut</label>
                                                <select
                                                    class="form-select form-control"
                                                    id="statut"
                                                >
                                                    <option value={1}>statut 1</option>
                                                    <option value={2}>statut 2</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="risqueSolvabilite" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Risque solvabilite </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="risqueSolvabilite"
                                                    placeholder='Entrer le Risque solvabilite'
                                                />
                                            </div>
                                            <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                <button className="btn btn-info">Ajouter</button>
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

export default addAffire;
