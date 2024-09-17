/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const FormField = ({ label, id, type = 'text', placeholder, value, onChange, options, disabled }) => (
    <div className="mb-3 col-md-6 form-group">
        <label htmlFor={id} className="form-label" style={{ textAlign: 'left', display: 'block' }}>{label}</label>
        {type === 'select' ? (
            <select
                className="form-select form-control"
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                <option value="">Sélectionnez une option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value || option}>{option.label || option}</option>
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
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        libelle_affaire: '',
        prixGlobal: '',
        marche: '',
        dateDebut: '',
        dateFin: '',
        client: '',
        polePrincipale: '',
        divisionPrincipale: '',
        partCID: ''
    });

    const [clients, setClients] = useState([]);
    const [poles, setPoles] = useState([]);
    const [allDivisions, setAllDivisions] = useState([]);
    const [filteredDivisions, setFilteredDivisions] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        Promise.all([
            axios.get('http://localhost:8080/api/clients'),
            axios.get('http://localhost:8080/api/poles'),
            axios.get('http://localhost:8080/api/divisions'),
        ]).then(([clientsRes, polesRes, divisionsRes]) => {
            setClients(clientsRes.data);
            setPoles(polesRes.data);
            setAllDivisions(divisionsRes.data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        if (id === 'polePrincipale') {
            const selectedPoleId = value;
            const relatedDivisions = allDivisions.filter(division => division.pole.id_pole.toString() === selectedPoleId);
            setFilteredDivisions(relatedDivisions);
            setFormData(prevState => ({ ...prevState, polePrincipale: selectedPoleId, divisionPrincipale: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                prixGlobal: parseFloat(formData.prixGlobal),
                client: { id_client: parseInt(formData.client) },
                polePrincipale: { id_pole: parseInt(formData.polePrincipale) },
                divisionPrincipale: { id_division: parseInt(formData.divisionPrincipale) },
                partCID: parseFloat(formData.partCID)
            };
            await axios.post('http://localhost:8080/api/affaires', dataToSend);
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error adding affaire:', error);
            alert('Erreur lors de l\'ajout de l\'affaire: ' + error.response?.data?.message || error.message);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate('/afficherAffaireCA');
    };

    const breadcrumbItems = [
        { icon: "icon-home", link: "#" },
        { text: "Gestion des Affaires", link: "#" },
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
                            <h3 className="fw-bold mb-3">Gestion des Affaires</h3>
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Ajouter une nouvelle Affaire</div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <FormField label="Libellé de l'affaire" id="libelle_affaire" placeholder="Entrer le libellé de l'affaire" value={formData.libelle_affaire} onChange={handleInputChange} />
                                                <FormField label="Numéro de marché" id="marche" placeholder="Entrer le numéro de marché" value={formData.marche} onChange={handleInputChange} />

                                                <FormField label="Prix Global" id="prixGlobal" type="number" placeholder="Entrer le prix global" value={formData.prixGlobal} onChange={handleInputChange} />
                                                <FormField label="Part CID" id="partCID" type="number" placeholder="Entrer la part CID" value={formData.partCID} onChange={handleInputChange} />
                                                
                                                <FormField label="Date de début" id="dateDebut" type="date" value={formData.dateDebut} onChange={handleInputChange} />
                                                <FormField label="Date de fin" id="dateFin" type="date" value={formData.dateFin} onChange={handleInputChange} />
                                                
                                                <FormField 
                                                    label="Client" 
                                                    id="client" 
                                                    type="select" 
                                                    value={formData.client} 
                                                    onChange={handleInputChange}
                                                    options={clients.map(client => ({ value: client.id_client, label: client.nom_client }))}
                                                />
                                                <FormField 
                                                    label="Pôle Principale" 
                                                    id="polePrincipale" 
                                                    type="select" 
                                                    value={formData.polePrincipale} 
                                                    onChange={handleInputChange}
                                                    options={poles.map(pole => ({ value: pole.id_pole, label: pole.libelle_pole }))}
                                                />
                                                <FormField 
                                                    label="Division Principale" 
                                                    id="divisionPrincipale" 
                                                    type="select" 
                                                    value={formData.divisionPrincipale} 
                                                    onChange={handleInputChange}
                                                    options={filteredDivisions.map(division => ({ value: division.id_division, label: division.nom_division }))}
                                                    disabled={!formData.polePrincipale}
                                                />
                                            </div>
                                            <div className="card-action" style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                                                <button type="submit" className="btn btn-primary">Ajouter</button>
                                                <Link className="btn btn-danger" to='/afficherAffaireCA'>Annuler</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Succès</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success mr-2" />&nbsp;
                        L'affaire a été ajoutée avec succès!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccessModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddAffaire;
