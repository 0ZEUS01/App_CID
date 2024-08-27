/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';

const addAffaire = () => (
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
                                                <label htmlFor="NbrMarche" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Nom de Client</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="NbrMarche"
                                                    placeholder="Entrer le Numéro de marché"
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
                                                <label htmlFor="pole" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Pole Principale</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pole"
                                                    placeholder="Entrer le nom de pole"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6 form-group">
                                                <label htmlFor="division" className="form-label" style={{ textAlign: 'left', display: 'block' }}>Division Principale</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="division"
                                                    placeholder="Entrer le nom de division principale"
                                                />
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
                                                <label htmlFor="partCID" className="form-label" style={{ textAlign: 'left', display: 'block' }}> Part de CID (HT)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="partCID"
                                                    placeholder='Entrer la part de CID en DH'
                                                />
                                            </div>
                                            <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                <a className="btn btn-primary" href='/AddMissionCA'>Suivant</a>
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

export default addAffaire;
