/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => (
    <div>
        <div className="wrapper">
            {/* Sidebar */}
            <div className="sidebar" data-background-color="dark">
                <div className="sidebar-logo">
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
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <ul className="nav nav-secondary">
                            <li className="nav-item active">
                                <a data-bs-toggle="collapse" href="#accueil" className="collapsed" aria-expanded="false">
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
                <div className="main-content">
                    {/* Your main content here */}
                </div>
            </div>
        </div>
    </div>
);

export default Home;
