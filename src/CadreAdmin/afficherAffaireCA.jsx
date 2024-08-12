/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react';

const AfficherAffaire = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const data = [
        { code: '202100890', libelle: "Etude d’execution de la construction du barrage Tamri dans la province d'Agadir", division: 'G ah', client: 'Direction des amenagements hydrauliques', chef: 'Ammari Yousra' },
        { code: '202100891', libelle: 'Etude de la rehabilitation du canal de distribution', division: 'G iu', client: 'Direction des infrastructures urbaines', chef: 'Elidrissi Mohamed' },
        { code: '202100892', libelle: 'Etude d’impact environnemental de l’extension de la zone industrielle', division: 'G edd', client: "Direction de l'environnement", chef: 'Rahimi Nour' },
        { code: '202100893', libelle: "Construction de la station d’epuration des eaux usees", division: 'G edd', client: "Ministere de l'environnement", chef: 'Bouziane Samira' },
        { code: '202100894', libelle: 'Amenagement des infrastructures routieres', division: 'G iu', client: "Ministere de l'equipement", chef: 'Benjelloun Yassir' },
        { code: '202100895', libelle: "Rehabilitation du reseau d'assainissement", division: 'G ah', client: "Ministere de l'eau", chef: 'El Hammouchi Noura' },
        { code: '202100896', libelle: "Etude technique pour l'extension de la zone industrielle", division: 'G edd', client: "Ministere de l'industrie", chef: 'El Ouardighi Anas' },
        { code: '202100897', libelle: 'Projet de developpement durable des ressources en eau', division: 'G ah', client: "Ministere de l'eau", chef: 'Jabir Salima' },
        { code: '202100898', libelle: "Construction d'une nouvelle usine de traitement des dechets", division: 'G edd', client: "Ministere de l'environnement", chef: 'Rahmani Fatima' },
        { code: '202100899', libelle: 'Projet de renovation des infrastructures scolaires', division: 'G iu', client: "Ministere de l'education", chef: 'Habibi Soufiane' },
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

    return (
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
                                <h3 className="fw-bold mb-3">Gestion des Affaires</h3>
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
                                        <a href="#">Gestion des Affaires</a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Liste des affaires</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="d-flex align-items-center">
                                                <h4 className="card-title">Liste des affaires de pole Batiment, VRD </h4>
                                                <a href="/AddAffaire" className="btn btn-primary btn-round ms-auto">
                                                    <i className="fa fa-plus" />
                                                    &nbsp;&nbsp;Ajouter
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body" >
                                            <div className="table-striped">
                                                <table className="table table-striped table-hover mt-3">
                                                    <thead>
                                                        <tr>
                                                            <th onClick={() => requestSort('code')} className={getClassNamesFor('code')}>
                                                                Code Affaire <i className={getClassNamesFor('code') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                            </th>
                                                            <th onClick={() => requestSort('libelle')} className={getClassNamesFor('libelle')}>
                                                                Libelle Affaire <i className={getClassNamesFor('libelle') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                            </th>
                                                            <th onClick={() => requestSort('division')} className={getClassNamesFor('division')}>
                                                                Division <i className={getClassNamesFor('division') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                            </th>
                                                            <th onClick={() => requestSort('client')} className={getClassNamesFor('client')}>
                                                                Client <i className={getClassNamesFor('client') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                            </th>
                                                            <th onClick={() => requestSort('chef')} className={getClassNamesFor('chef')}>
                                                                Chef de projet <i className={getClassNamesFor('chef') === 'ascending' ? 'fa fa-sort-up' : 'fa fa-sort-down'} />
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sortedData.map((item, index) => (
                                                            <tr key={index}>
                                                                <td style={{ textAlign: 'left' }}>{item.code}</td>
                                                                <td style={{ textAlign: 'left' }}>{item.libelle}</td>
                                                                <td style={{ textAlign: 'left' }}>{item.division}</td>
                                                                <td style={{ textAlign: 'left' }}>{item.client}</td>
                                                                <td style={{ textAlign: 'left' }}>{item.chef}</td>
                                                                <td style={{ textAlign: 'left' }}>
                                                                    <div className="form-button-action">
                                                                        <button type="button" data-bs-toggle="tooltip" title="Details Affaire" className="btn btn-link btn-info " data-original-title="Details Affaire">
                                                                            <i className="fa icon-information" />
                                                                        </button>
                                                                        <button type="button" data-bs-toggle="tooltip" title="Edit Affaire" className="btn btn-link btn-primary " data-original-title="Edit Affaire">
                                                                            <i className="fa fa-edit" />
                                                                        </button>
                                                                        <button type="button" data-bs-toggle="tooltip" title="Remove Affaire" className="btn btn-link btn-danger " data-original-title="Remove Affaire">
                                                                            <i className="fa fa-times" />
                                                                        </button>
                                                                    </div>
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
export default AfficherAffaire;
