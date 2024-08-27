/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';

const AddDivisions = () => {
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
                                            <div className="card-title" style={{ textAlign: 'left' }}>Ajouter les Mission</div>
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

export default AddDivisions;
