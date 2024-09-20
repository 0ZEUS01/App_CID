import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
                {options && options.map((option, index) => (
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
                disabled={disabled}
            />
        )}
    </div>
);

const AddMission = () => {
    const { affaireId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        libelle_mission: '',
        quantite: '',
        unite: '',
        prixMissionTotal: '',
        prixMissionUnitaire: '',
        partMissionCID: '',
        dateDebut: '',
        dateFin: '',
        pole: '',
        divisionPrincipale: '',
    });

    const [missions, setMissions] = useState([]);
    const [poles, setPoles] = useState([]);
    const [allDivisions, setAllDivisions] = useState([]);
    const [filteredDivisions, setFilteredDivisions] = useState([]);
    const [unites, setUnites] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Fetch poles
        axios.get('http://localhost:8080/api/poles')
            .then(response => setPoles(response.data))
            .catch(error => console.error('Error fetching poles:', error));

        // Fetch all divisions
        axios.get('http://localhost:8080/api/divisions')
            .then(response => setAllDivisions(response.data))
            .catch(error => console.error('Error fetching divisions:', error));

        // Fetch unites
        axios.get('http://localhost:8080/api/unites')
            .then(response => setUnites(response.data))
            .catch(error => console.error('Error fetching unites:', error));
    }, []);

    useEffect(() => {
        if (formData.pole) {
            const divisionsForPole = allDivisions.filter(div => div.pole.id_pole === parseInt(formData.pole));
            setFilteredDivisions(divisionsForPole);
        } else {
            setFilteredDivisions([]);
        }
    }, [formData.pole, allDivisions]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        // Clear errors when input changes
        setErrors(prevErrors => ({
            ...prevErrors,
            [id]: undefined
        }));

        if (id === 'pole') {
            setFormData(prevState => ({
                ...prevState,
                divisionPrincipale: ''
            }));
        }

        if (id === 'unite') {
            // Reset related fields when changing unite
            setFormData(prevState => ({
                ...prevState,
                quantite: '',
                prixMissionUnitaire: '',
                prixMissionTotal: ''
            }));
        }

        if (id === 'quantite' || id === 'prixMissionUnitaire') {
            const quantite = id === 'quantite' ? parseFloat(value) : parseFloat(formData.quantite);
            const prixUnitaire = id === 'prixMissionUnitaire' ? parseFloat(value) : parseFloat(formData.prixMissionUnitaire);
            if (!isNaN(quantite) && !isNaN(prixUnitaire)) {
                setFormData(prevState => ({
                    ...prevState,
                    prixMissionTotal: (quantite * prixUnitaire).toFixed(2)
                }));
            }
        }

        // Validate Part CID
        if (id === 'partMissionCID' || id === 'prixMissionTotal') {
            const partCID = id === 'partMissionCID' ? parseFloat(value) : parseFloat(formData.partMissionCID);
            const prixTotal = id === 'prixMissionTotal' ? parseFloat(value) : parseFloat(formData.prixMissionTotal);
            if (partCID > prixTotal) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    partMissionCID: 'La part CID ne peut pas être supérieure au prix total'
                }));
            }
        }

        // Validate dates
        if (id === 'dateDebut' || id === 'dateFin') {
            const dateDebut = id === 'dateDebut' ? new Date(value) : new Date(formData.dateDebut);
            const dateFin = id === 'dateFin' ? new Date(value) : new Date(formData.dateFin);
            if (dateDebut > dateFin) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    dateFin: 'La date de fin doit être postérieure à la date de début'
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (parseFloat(formData.partMissionCID) > parseFloat(formData.prixMissionTotal)) {
            newErrors.partMissionCID = 'La part CID ne peut pas être supérieure au prix total';
        }

        if (new Date(formData.dateDebut) > new Date(formData.dateFin)) {
            newErrors.dateFin = 'La date de fin doit être postérieure à la date de début';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const dataToSend = {
                libelle_mission: formData.libelle_mission,
                unite: { id_unite: parseInt(formData.unite) },
                prixMissionTotal: parseFloat(formData.prixMissionTotal),
                partMissionCID: parseFloat(formData.partMissionCID),
                dateDebut: formData.dateDebut,
                dateFin: formData.dateFin,
                affaire: { idAffaire: parseInt(formData.affaireId) }, // Make sure this is coming from your form
                missionDivisions: [
                    {
                        division: { id_division: parseInt(formData.divisionPrincipale) },
                        isPrincipal: true, // This should be set based on user input
                        partMission: 100
                    }
                ]
            };
    
            console.log('Data being sent:', dataToSend);
    
            const response = await axios.post('http://localhost:8080/api/missions', dataToSend);
            // ... rest of your code
        } catch (error) {
            console.error('Error adding mission:', error);
            console.error('Error response:', error.response?.data);
            alert('Erreur lors de l\'ajout de la mission: ' + (error.response?.data || error.message));
        }
    };
    const isForfait = formData.unite === '10';

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <h3 className="fw-bold mb-3">Ajouter des Missions pour l'Affaire #{affaireId}</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Nouvelle Mission</div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="row">
                                                <FormField label="Libellé de Mission" id="libelle_mission" value={formData.libelle_mission} onChange={handleInputChange} />
                                                <FormField label="Unité" id="unite" type="select" value={formData.unite} onChange={handleInputChange} options={unites.map(unite => ({ value: unite.id_unite, label: unite.nom_unite }))} />
                                                {!isForfait && (
                                                    <>
                                                        <FormField label="Quantité" id="quantite" type="number" value={formData.quantite} onChange={handleInputChange} />
                                                        <FormField label="Prix Unitaire" id="prixMissionUnitaire" type="number" value={formData.prixMissionUnitaire} onChange={handleInputChange} />
                                                    </>
                                                )}
                                                <FormField label="Prix Total" id="prixMissionTotal" type="number" value={formData.prixMissionTotal} onChange={handleInputChange} disabled={!isForfait} />
                                                <FormField label="Part Mission CID" id="partMissionCID" type="number" value={formData.partMissionCID} onChange={handleInputChange} />
                                                {errors.partMissionCID && <div className="text-danger col-md-12">{errors.partMissionCID}</div>}
                                                <FormField label="Date de début" id="dateDebut" type="date" value={formData.dateDebut} onChange={handleInputChange} />
                                                <FormField label="Date de fin" id="dateFin" type="date" value={formData.dateFin} onChange={handleInputChange} />
                                                {errors.dateFin && <div className="text-danger col-md-12">{errors.dateFin}</div>}
                                                <FormField label="Pôle" id="pole" type="select" value={formData.pole} onChange={handleInputChange} options={poles.map(pole => ({ value: pole.id_pole, label: pole.libelle_pole }))} />
                                                <FormField label="Division Principale" id="divisionPrincipale" type="select" value={formData.divisionPrincipale} onChange={handleInputChange} options={filteredDivisions.map(div => ({ value: div.id_division, label: div.nom_division }))} disabled={!formData.pole} />
                                            </div>
                                        </div>
                                        <div className="card-action">
                                            <button type="submit" className="btn btn-primary">Ajouter Mission</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-12">
                                <button className="btn btn-success" onClick={() => navigate('/afficherAffaireCA')}>Appliquer</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Succès</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success mr-2" />
                        La mission a été ajoutée avec succès!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMission;