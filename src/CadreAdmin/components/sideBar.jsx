import React from 'react';

const Sidebar = () => (
    <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
            <div className="logo-header" data-background-color="dark">
                <a href="/HomeCA" className="logo">
                    <img src="assets/img/logo.png" alt="navbar brand" className="navbar-brand" height={60} />
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
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
                <ul className="nav nav-secondary">
                    <li className="nav-item active">
                        <a data-bs-toggle="collapse" href="/HomeCA" className="collapsed" aria-expanded="false">
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
);

export default Sidebar;
