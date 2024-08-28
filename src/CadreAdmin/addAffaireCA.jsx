/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from'./components/footer'

const FormField = ({ label, id, type = 'text', placeholder, value, onChange, options }) => (
    <div className="mb-3 col-md-6 form-group">
        <label htmlFor={id} className="form-label" style={{ textAlign: 'left', display: 'block' }}>{label}</label>
        {type === 'select' ? (
            <select
                className="form-select form-control"
                id={id}
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
    </div>
);

const Breadcrumb = ({ items }) => (
    <ul className="breadcrumbs mb-3">
        {items.map((item, index) => (
            <React.Fragment key={index}>
                <li className={item.icon ? "nav-home" : "nav-item"}>
                    <Link to={item.link}>
                        {item.icon ? <i className={item.icon} /> : item.text}
                    </Link>
                </li>
                {index < items.length - 1 && (
                    <li className="separator">
                        <i className="icon-arrow-right" />
                    </li>
                )}
            </React.Fragment>
        ))}
    </ul>
);


const AddAffaire = () => {
    const [formData, setFormData] = useState({
        libelleAffaire: '',
        nomClient: '',
        numeroMarche: '',
        polePrincipale: '',
        divisionPrincipale: '',
        groupment: '1',
        nomMandataireGroupment: '',
        partTotaleMarche: '',
        partCID: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const breadcrumbItems = [
        { icon: "icon-home", link: "#" },
        { text: "Gestion des Affaire", link: "#" },
        { text: "Ajouter une nouvelle Affaire", link: "#" }
    ];

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Gestion des Affaire</h3>
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Ajouter une nouvelle Affaire</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <FormField label="Libelle de l'affaire" id="libelleAffaire" placeholder="Entrer le libelle de l'affaire" value={formData.libelleAffaire} onChange={handleInputChange} />
                                            <FormField label="Nom de Client" id="nomClient" placeholder="Entrer le nom du client" value={formData.nomClient} onChange={handleInputChange} />
                                            <FormField label="Numéro de marché" id="numeroMarche" placeholder="Entrer le Numéro de marché" value={formData.numeroMarche} onChange={handleInputChange} />
                                            <FormField label="Pole Principale" id="polePrincipale" placeholder="Entrer le nom de pole" value={formData.polePrincipale} onChange={handleInputChange} />
                                            <FormField label="Division Principale" id="divisionPrincipale" placeholder="Entrer le nom de division principale" value={formData.divisionPrincipale} onChange={handleInputChange} />
                                            <FormField label="Groupment" id="groupment" type="select" value={formData.groupment} onChange={handleInputChange} options={[
                                                { value: '1', label: 'Oui' },
                                                { value: '2', label: 'Non' }
                                            ]} />
                                            <FormField label="Nom de mandataire de groupment" id="nomMandataireGroupment" placeholder="Entrer le nom de mandataire de groupment" value={formData.nomMandataireGroupment} onChange={handleInputChange} />
                                            <FormField label="Part totale de marché (HT)" id="partTotaleMarche" placeholder="Entrer la part totale de marché en DH" value={formData.partTotaleMarche} onChange={handleInputChange} />
                                            <FormField label="Part de CID (HT)" id="partCID" placeholder="Entrer la part de CID en DH" value={formData.partCID} onChange={handleInputChange} />
                                            <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                <Link className="btn btn-primary" to='/AddMissionCA'>Suivant</Link>
                                                <button className="btn btn-black btn-border">Annuler</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AddAffaire;
