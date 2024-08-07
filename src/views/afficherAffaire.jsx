/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const addAffire = () => (
    <div>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Forms - Kaiadmin Bootstrap 5 Admin Dashboard</title>
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
        <link rel="icon" href="../assets/img/kaiadmin/favicon.ico" type="image/x-icon" />
        {/* Fonts and icons */}
        {/* CSS Files */}
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assets/css/plugins.min.css" />
        <link rel="stylesheet" href="../assets/css/kaiadmin.min.css" />
        {/* CSS Just for demo purpose, don't include it in your project */}
        <link rel="stylesheet" href="../assets/css/demo.css" />
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
                                            <a href="components/buttons.html">
                                                <span className="sub-item">Afficher les Affaire</span>
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
                                        <div className="d-flex align-items-center">
                                            <h4 className="card-title">Add Row</h4>
                                            <button className="btn btn-primary btn-round ms-auto" data-bs-toggle="modal" data-bs-target="#addRowModal">
                                                <i className="fa fa-plus" />
                                                Add Row
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {/* Modal */}
                                        <div className="modal fade" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                        <h5 className="modal-title">
                                                            <span className="fw-mediumbold"> New</span>
                                                            <span className="fw-light"> Row </span>
                                                        </h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="small">
                                                            Create a new row using this form, make sure you
                                                            fill them all
                                                        </p>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <div className="form-group form-group-default">
                                                                        <label>Name</label>
                                                                        <input id="addName" type="text" className="form-control" placeholder="fill name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pe-0">
                                                                    <div className="form-group form-group-default">
                                                                        <label>Position</label>
                                                                        <input id="addPosition" type="text" className="form-control" placeholder="fill position" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group form-group-default">
                                                                        <label>Office</label>
                                                                        <input id="addOffice" type="text" className="form-control" placeholder="fill office" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer border-0">
                                                        <button type="button" id="addRowButton" className="btn btn-primary">
                                                            Add
                                                        </button>
                                                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table id="add-row" className="display table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th style={{ width: '10%' }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>Junior Technical Author</td>
                                                        <td>San Francisco</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>New York</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>Sales Assistant</td>
                                                        <td>San Francisco</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Tokyo</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>Javascript Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>Software Engineer</td>
                                                        <td>Edinburgh</td>
                                                        <td>
                                                            <div className="form-button-action">
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                                    <i className="fa fa-edit" />
                                                                </button>
                                                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                                    <i className="fa fa-times" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
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

export default addAffire;
