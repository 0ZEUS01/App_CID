/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const FormField = ({ label, id, type = 'text', placeholder, value, onChange, options, disabled, error }) => (
    <div className="mb-3 col-md-6 form-group">
        <label htmlFor={id} className="form-label" style={{ textAlign: 'left', display: 'block' }}>{label}</label>
        {type === 'select' ? (
            <select
                className={`form-select form-control ${error ? 'is-invalid' : ''}`}
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
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
);

const RepartirMissionCD = () => {
    const { idMission } = useParams();
    const navigate = useNavigate();
    const [mission, setMission] = useState(null);
    const [divisions, setDivisions] = useState([]);
    const [sousTraitants, setSousTraitants] = useState([]);
    const [partenaires, setPartenaires] = useState([]);
    const [repartition, setRepartition] = useState({
        principalDivision: { id: '', pourcentage: 0 },
        secondaryDivisions: [],
        sousTraitants: [],
        partenaires: []
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [missionRes, divisionsRes, sousTraitantsRes, partenairesRes] = await Promise.all([
                    axios.get(`http://localhost:8080/api/missions/${idMission}`),
                    axios.get('http://localhost:8080/api/divisions'),
                    axios.get('http://localhost:8080/api/sous-traitants'),
                    axios.get('http://localhost:8080/api/partenaires')
                ]);
                setMission(missionRes.data);
                setDivisions(divisionsRes.data);
                setSousTraitants(sousTraitantsRes.data);
                setPartenaires(partenairesRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [idMission]);

    const handlePrincipalDivisionChange = (e) => {
        setRepartition({
            ...repartition,
            principalDivision: { ...repartition.principalDivision, id: e.target.value }
        });
    };

    const handlePrincipalDivisionPercentageChange = (e) => {
        setRepartition({
            ...repartition,
            principalDivision: { ...repartition.principalDivision, pourcentage: parseFloat(e.target.value) }
        });
    };

    const addSecondaryDivision = () => {
        setRepartition({
            ...repartition,
            secondaryDivisions: [...repartition.secondaryDivisions, { id: '', pourcentage: 0 }]
        });
    };

    const handleSecondaryDivisionChange = (index, field, value) => {
        const updatedDivisions = [...repartition.secondaryDivisions];
        updatedDivisions[index][field] = field === 'pourcentage' ? parseFloat(value) : value;
        setRepartition({ ...repartition, secondaryDivisions: updatedDivisions });
    };

    const removeSecondaryDivision = (index) => {
        const updatedDivisions = repartition.secondaryDivisions.filter((_, i) => i !== index);
        setRepartition({ ...repartition, secondaryDivisions: updatedDivisions });
    };

    const addSousTraitant = () => {
        setRepartition({
            ...repartition,
            sousTraitants: [...repartition.sousTraitants, { id: '', pourcentage: 0 }]
        });
    };

    const handleSousTraitantChange = (index, field, value) => {
        const updatedSousTraitants = [...repartition.sousTraitants];
        updatedSousTraitants[index][field] = field === 'pourcentage' ? parseFloat(value) : value;
        setRepartition({ ...repartition, sousTraitants: updatedSousTraitants });
    };

    const removeSousTraitant = (index) => {
        const updatedSousTraitants = repartition.sousTraitants.filter((_, i) => i !== index);
        setRepartition({ ...repartition, sousTraitants: updatedSousTraitants });
    };

    const addPartenaire = () => {
        setRepartition({
            ...repartition,
            partenaires: [...repartition.partenaires, { id: '', pourcentage: 0 }]
        });
    };

    const handlePartenaireChange = (index, field, value) => {
        const updatedPartenaires = [...repartition.partenaires];
        updatedPartenaires[index][field] = field === 'pourcentage' ? parseFloat(value) : value;
        setRepartition({ ...repartition, partenaires: updatedPartenaires });
    };

    const removePartenaire = (index) => {
        const updatedPartenaires = repartition.partenaires.filter((_, i) => i !== index);
        setRepartition({ ...repartition, partenaires: updatedPartenaires });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/api/missions/${idMission}/repartition`, repartition);
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error submitting repartition:', error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate('/afficherMissionCD');
    };

    if (!mission) return <div>Loading...</div>;

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Répartition de la Mission</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <a href="#"><i className="flaticon-home"></i></a>
                                    </li>
                                    <li className="separator"><i className="flaticon-right-arrow"></i></li>
                                    <li className="nav-item"><a href="#">Missions</a></li>
                                    <li className="separator"><i className="flaticon-right-arrow"></i></li>
                                    <li className="nav-item"><a href="#">Répartition</a></li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Répartition de la Mission: {mission.libelle_mission}</div>
                                        </div>
                                        <div className="card-body">
                                            <Form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <FormField
                                                        label="Division Principale"
                                                        id="principalDivision"
                                                        type="select"
                                                        value={repartition.principalDivision.id}
                                                        onChange={handlePrincipalDivisionChange}
                                                        options={divisions.map(div => ({ value: div.id, label: div.nom_division }))}
                                                    />
                                                    <FormField
                                                        label="Pourcentage"
                                                        id="principalDivisionPercentage"
                                                        type="number"
                                                        placeholder="Pourcentage"
                                                        value={repartition.principalDivision.pourcentage}
                                                        onChange={handlePrincipalDivisionPercentageChange}
                                                    />
                                                </div>

                                                <h5 className="mt-4 mb-3">Divisions Secondaires</h5>
                                                {repartition.secondaryDivisions.map((div, index) => (
                                                    <div className="row mb-3" key={index}>
                                                        <FormField
                                                            label="Division"
                                                            id={`secondaryDivision-${index}`}
                                                            type="select"
                                                            value={div.id}
                                                            onChange={(e) => handleSecondaryDivisionChange(index, 'id', e.target.value)}
                                                            options={divisions.map(d => ({ value: d.id, label: d.nom_division }))}
                                                        />
                                                        <FormField
                                                            label="Pourcentage"
                                                            id={`secondaryDivisionPercentage-${index}`}
                                                            type="number"
                                                            placeholder="Pourcentage"
                                                            value={div.pourcentage}
                                                            onChange={(e) => handleSecondaryDivisionChange(index, 'pourcentage', e.target.value)}
                                                        />
                                                        <div className="col-md-2 d-flex align-items-end">
                                                            <Button variant="danger" onClick={() => removeSecondaryDivision(index)}>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <Button variant="secondary" onClick={addSecondaryDivision} className="mb-4">
                                                    <FontAwesomeIcon icon={faPlus} /> Ajouter une division secondaire
                                                </Button>

                                                <h5 className="mt-4 mb-3">Sous-traitants</h5>
                                                {repartition.sousTraitants.map((st, index) => (
                                                    <div className="row mb-3" key={index}>
                                                        <FormField
                                                            label="Sous-traitant"
                                                            id={`sousTraitant-${index}`}
                                                            type="select"
                                                            value={st.id}
                                                            onChange={(e) => handleSousTraitantChange(index, 'id', e.target.value)}
                                                            options={sousTraitants.map(s => ({ value: s.id, label: s.nom_st }))}
                                                        />
                                                        <FormField
                                                            label="Pourcentage"
                                                            id={`sousTraitantPercentage-${index}`}
                                                            type="number"
                                                            placeholder="Pourcentage"
                                                            value={st.pourcentage}
                                                            onChange={(e) => handleSousTraitantChange(index, 'pourcentage', e.target.value)}
                                                        />
                                                        <div className="col-md-2 d-flex align-items-end">
                                                            <Button variant="danger" onClick={() => removeSousTraitant(index)}>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <Button variant="secondary" onClick={addSousTraitant} className="mb-4">
                                                    <FontAwesomeIcon icon={faPlus} /> Ajouter un sous-traitant
                                                </Button>

                                                <h5 className="mt-4 mb-3">Partenaires</h5>
                                                {repartition.partenaires.map((p, index) => (
                                                    <div className="row mb-3" key={index}>
                                                        <FormField
                                                            label="Partenaire"
                                                            id={`partenaire-${index}`}
                                                            type="select"
                                                            value={p.id}
                                                            onChange={(e) => handlePartenaireChange(index, 'id', e.target.value)}
                                                            options={partenaires.map(part => ({ value: part.id, label: part.nom_partenariat }))}
                                                        />
                                                        <FormField
                                                            label="Pourcentage"
                                                            id={`partenairePercentage-${index}`}
                                                            type="number"
                                                            placeholder="Pourcentage"
                                                            value={p.pourcentage}
                                                            onChange={(e) => handlePartenaireChange(index, 'pourcentage', e.target.value)}
                                                        />
                                                        <div className="col-md-2 d-flex align-items-end">
                                                            <Button variant="danger" onClick={() => removePartenaire(index)}>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <Button variant="secondary" onClick={addPartenaire} className="mb-4">
                                                    <FontAwesomeIcon icon={faPlus} /> Ajouter un partenaire
                                                </Button>

                                                <div className="card-action">
                                                    <Button variant="primary" type="submit">
                                                        Soumettre la répartition
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Succès</Modal.Title>
                </Modal.Header>
                <Modal.Body>La répartition a été enregistrée avec succès.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseSuccessModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RepartirMissionCD;
