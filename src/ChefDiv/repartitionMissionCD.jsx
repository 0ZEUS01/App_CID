import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Footer from './components/footer';

const FormField = ({ label, id, type = 'text', name, value, onChange, options, disabled, required }) => (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        {type === 'select' ? (
            <Form.Control
                as="select"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            >
                <option value="">Sélectionnez une option</option>
                {options && options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </Form.Control>
        ) : (
            <Form.Control
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        )}
    </Form.Group>
);

const RepartirMissionCD = () => {
    const { idMission } = useParams();
    const navigate = useNavigate();
    const [mission, setMission] = useState(null);
    const [divisions, setDivisions] = useState([]);
    const [partenaires, setPartenaires] = useState([]);
    const [sousTraitants, setSousTraitants] = useState([]);
    const [repartition, setRepartition] = useState({
        principalDivisionPart: 0,
        secondaryDivisions: [],
        partenaires: [],
        sousTraitants: []
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [totalPart, setTotalPart] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [missionRes, divisionsRes, partenairesRes, sousTraitantsRes] = await Promise.all([
                    axios.get(`http://localhost:8080/api/missions/${idMission}`),
                    axios.get('http://localhost:8080/api/divisions'),
                    axios.get('http://localhost:8080/api/partenaires'),
                    axios.get('http://localhost:8080/api/sous-traitants'),
                ]);

                setMission(missionRes.data);
                setDivisions(divisionsRes.data);
                setPartenaires(partenairesRes.data);
                setSousTraitants(sousTraitantsRes.data);
                
                if (missionRes.data) {
                    const newRepartition = {
                        principalDivisionPart: missionRes.data.partDivPrincipale || 0,
                        secondaryDivisions: missionRes.data.missionDivisions?.map(sd => ({
                            divisionId: sd.division?.id_division,
                            partMission: sd.partMission
                        })) || [],
                        partenaires: missionRes.data.missionPartenaires?.map(p => ({
                            partenaireId: p.partenaire?.id_partenaire,
                            partMission: p.partMission
                        })) || [],
                        sousTraitants: missionRes.data.missionSousTraitants?.map(st => ({
                            sousTraitantId: st.sousTraitant?.id_soustrait,
                            partMission: st.partMission
                        })) || []
                    };
                    setRepartition(newRepartition);
                    calculateTotalPart(newRepartition);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage(`Error fetching data: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [idMission]);

    const calculateTotalPart = (repartitionData) => {
        const total = repartitionData.principalDivisionPart +
            repartitionData.secondaryDivisions.reduce((sum, div) => sum + (div.partMission || 0), 0) +
            repartitionData.partenaires.reduce((sum, p) => sum + (p.partMission || 0), 0) +
            repartitionData.sousTraitants.reduce((sum, st) => sum + (st.partMission || 0), 0);
        setTotalPart(total);
        validateTotalPart(total);
    };

    const validateTotalPart = (total) => {
        if (mission && total > mission.partMissionCID) {
            setErrorMessage(`Le total des parts (${total.toFixed(2)}) dépasse la part CID de la mission (${mission.partMissionCID}).`);
        } else {
            setErrorMessage('');
        }
    };

    const handlePrincipalDivisionPartChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setRepartition(prev => {
            const newRepartition = { ...prev, principalDivisionPart: value };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const handleSecondaryDivisionChange = (index, field, value) => {
        setRepartition(prev => {
            const updatedDivisions = [...prev.secondaryDivisions];
            updatedDivisions[index][field] = field === 'partMission' ? parseFloat(value) || 0 : value;
            const newRepartition = { ...prev, secondaryDivisions: updatedDivisions };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const addSecondaryDivision = () => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                secondaryDivisions: [...prev.secondaryDivisions, { divisionId: '', partMission: 0 }]
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const removeSecondaryDivision = (index) => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                secondaryDivisions: prev.secondaryDivisions.filter((_, i) => i !== index)
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const handlePartenaireChange = (index, field, value) => {
        setRepartition(prev => {
            const updatedPartenaires = [...prev.partenaires];
            updatedPartenaires[index][field] = field === 'partMission' ? parseFloat(value) || 0 : value;
            const newRepartition = { ...prev, partenaires: updatedPartenaires };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const addPartenaire = () => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                partenaires: [...prev.partenaires, { partenaireId: '', partMission: 0 }]
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const removePartenaire = (index) => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                partenaires: prev.partenaires.filter((_, i) => i !== index)
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const handleSousTraitantChange = (index, field, value) => {
        setRepartition(prev => {
            const updatedSousTraitants = [...prev.sousTraitants];
            updatedSousTraitants[index][field] = field === 'partMission' ? parseFloat(value) || 0 : value;
            const newRepartition = { ...prev, sousTraitants: updatedSousTraitants };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const addSousTraitant = () => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                sousTraitants: [...prev.sousTraitants, { sousTraitantId: '', partMission: 0 }]
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const removeSousTraitant = (index) => {
        setRepartition(prev => {
            const newRepartition = {
                ...prev,
                sousTraitants: prev.sousTraitants.filter((_, i) => i !== index)
            };
            calculateTotalPart(newRepartition);
            return newRepartition;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errorMessage) {
            console.error("Impossible de soumettre en raison d'erreurs de validation.");
            return;
        }

        try {
            await axios.post(`http://localhost:8080/api/missions/${idMission}/repartition`, repartition);
            navigate(-1);
        } catch (error) {
            console.error('Error submitting repartition:', error);
            setErrorMessage('Erreur lors de la soumission de la répartition. Veuillez réessayer.');
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader /><br />
                <div className="content">
                    <div className="container-fluid">
                        <div className="page-header">
                            <h3 className="fw-bold mb-3">Répartition de la Mission</h3>
                            <ul className="breadcrumbs mb-3">
                                <li className="nav-home">
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <span>Répartition de la Mission</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Formulaire de répartition de la mission: {mission.libelle_mission}</h4>
                                    </div>
                                    <div className="card-body">
                                        <Form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md={6}>
                                                    <FormField
                                                        label="Division Principale"
                                                        id="principalDivision"
                                                        type="select"
                                                        name="principalDivision"
                                                        value={mission.principalDivision?.id_division || ''}
                                                        options={[{ value: mission.principalDivision?.id_division, label: mission.principalDivision?.nom_division }]}
                                                        disabled={true}
                                                        required
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <FormField
                                                        label="Part de la division principale"
                                                        id="principalDivisionPart"
                                                        type="number"
                                                        name="principalDivisionPart"
                                                        value={repartition.principalDivisionPart}
                                                        onChange={handlePrincipalDivisionPartChange}
                                                        required
                                                    />
                                                </Col>
                                            </Row>

                                            <h5 className="mt-4">Divisions Secondaires</h5>
                                            {repartition.secondaryDivisions.map((div, index) => (
                                                <Row key={index}>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Division"
                                                            id={`secondaryDivision-${index}`}
                                                            type="select"
                                                            name={`secondaryDivision-${index}`}
                                                            value={div.divisionId}
                                                            onChange={(e) => handleSecondaryDivisionChange(index, 'divisionId', e.target.value)}
                                                            options={divisions.map(d => ({ value: d.id_division, label: d.nom_division }))}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Part de cette division"
                                                            id={`secondaryDivisionPart-${index}`}
                                                            type="number"
                                                            name={`secondaryDivisionPart-${index}`}
                                                            value={div.partMission}
                                                            onChange={(e) => handleSecondaryDivisionChange(index, 'partMission', e.target.value)}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={2} className="d-flex align-items-end mb-3">
                                                        <Button variant="danger" onClick={() => removeSecondaryDivision(index)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            ))}
                                            <Button variant="secondary" onClick={addSecondaryDivision} className="mb-4">
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter une division secondaire
                                            </Button>

                                            <h5 className="mt-4">Partenaires</h5>
                                            {repartition.partenaires.map((p, index) => (
                                                <Row key={index}>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Partenaire"
                                                            id={`partenaire-${index}`}
                                                            type="select"
                                                            name={`partenaire-${index}`}
                                                            value={p.partenaireId}
                                                            onChange={(e) => handlePartenaireChange(index, 'partenaireId', e.target.value)}
                                                            options={partenaires.map(part => ({ value: part.id_partenaire, label: part.nom_partenaire }))}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Part du partenaire"
                                                            id={`partenairePart-${index}`}
                                                            type="number"
                                                            name={`partenairePart-${index}`}
                                                            value={p.partMission}
                                                            onChange={(e) => handlePartenaireChange(index, 'partMission', e.target.value)}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={2} className="d-flex align-items-end mb-3">
                                                        <Button variant="danger" onClick={() => removePartenaire(index)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            ))}
                                            <Button variant="secondary" onClick={addPartenaire} className="mb-4">
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un partenaire
                                            </Button>

                                            <h5 className="mt-4">Sous-traitants</h5>
                                            {repartition.sousTraitants.map((st, index) => (
                                                <Row key={index}>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Sous-traitant"
                                                            id={`sousTraitant-${index}`}
                                                            type="select"
                                                            name={`sousTraitant-${index}`}
                                                            value={st.sousTraitantId}
                                                            onChange={(e) => handleSousTraitantChange(index, 'sousTraitantId', e.target.value)}
                                                            options={sousTraitants.map(s => ({ value: s.id_soustrait, label: s.nom_soustrait }))}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={5}>
                                                        <FormField
                                                            label="Part du sous-traitant"
                                                            id={`sousTraitantPart-${index}`}
                                                            type="number"
                                                            name={`sousTraitantPart-${index}`}
                                                            value={st.partMission}
                                                            onChange={(e) => handleSousTraitantChange(index, 'partMission', e.target.value)}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col md={2} className="d-flex align-items-end mb-3">
                                                        <Button variant="danger" onClick={() => removeSousTraitant(index)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            ))}
                                            <Button variant="secondary" onClick={addSousTraitant} className="mb-4">
                                                <FontAwesomeIcon icon={faPlus} /> Ajouter un sous-traitant
                                            </Button>

                                            <div className="mt-4">
                                                <strong>Total des parts: {totalPart.toFixed(2)} / {mission.partMissionCID} (Part CID de la mission)</strong>
                                            </div>

                                            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

                                            <Button variant="primary" type="submit" className="mt-4" disabled={!!errorMessage}>
                                                Soumettre la répartition
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default RepartirMissionCD;