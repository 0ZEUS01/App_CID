/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
    const [repartition, setRepartition] = useState({
        principalDivision: { id: '', part: 0 },
        secondaryDivisions: [],
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [partDivPrincipale, setPartDivPrincipale] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [missionRes, divisionsRes] = await Promise.all([
                    axios.get(`http://localhost:8080/api/missions/${idMission}`),
                    axios.get('http://localhost:8080/api/divisions'),
                ]);
                setMission(missionRes.data);
                setDivisions(divisionsRes.data);
                // Set the principal division from the mission data
                if (missionRes.data && missionRes.data.principalDivision) {
                    setRepartition(prev => ({
                        ...prev,
                        principalDivision: { 
                            id: missionRes.data.principalDivision.id_division,
                            part: missionRes.data.partDivPrincipale
                        }
                    }));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [idMission]);

    const handlePrincipalDivisionPartChange = (e) => {
        const value = parseFloat(e.target.value);
        setPartDivPrincipale(value);

        // Real-time validation
        if (value < 0) {
            setErrorMessage("La part de cette division doit être un montant non négatif.");
        } else if (value > mission.partMissionCID) {
            setErrorMessage("La part de cette division ne peut pas être supérieure à la part de CID.");
        } else {
            setErrorMessage(''); // Clear error if valid
        }

        setRepartition(prev => ({
            ...prev,
            principalDivision: { ...prev.principalDivision, part: value }
        }));
    };

    const addSecondaryDivision = () => {
        setRepartition(prev => ({
            ...prev,
            secondaryDivisions: [...prev.secondaryDivisions, { id: '', part: 0 }]
        }));
    };

    const handleSecondaryDivisionChange = (index, field, value) => {
        setRepartition(prev => {
            const updatedDivisions = [...prev.secondaryDivisions];
            updatedDivisions[index][field] = field === 'part' ? parseFloat(value) : value;
            return { ...prev, secondaryDivisions: updatedDivisions };
        });
    };

    const removeSecondaryDivision = (index) => {
        setRepartition(prev => ({
            ...prev,
            secondaryDivisions: prev.secondaryDivisions.filter((_, i) => i !== index)
        }));
    };


    const updatePartDivPrincipale = (missionId, newValue) => {
        return axios.put(`http://localhost:8080/api/missions/${missionId}/part-div-principale`, 
            { partDivPrincipale: newValue },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent submission if there's an error
        if (errorMessage) {
            console.error("Impossible de soumettre en raison d'erreurs de validation.");
            return;
        }

        try {
            // First, update the mission with the principal division's part
            await updatePartDivPrincipale(idMission, repartition.principalDivision.part);

            // Prepare the data for secondary divisions
            const secondaryDivisionsData = repartition.secondaryDivisions.map(div => ({
                division: { id_division: div.id },
                partMission: div.part,
                isPrincipal: false
            }));

            // Send the secondary divisions data
            await axios.post(`http://localhost:8080/api/missions/${idMission}/repartition`, secondaryDivisionsData);

            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error submitting repartition:', error);
            // You might want to show an error message to the user here
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        window.location.href = `/afficherMissionCD/${mission.affaire.idAffaire}`; 
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
                                                        onChange={() => {}} // Empty function as the field is disabled
                                                        options={divisions.map(div => ({ value: div.id_division, label: div.nom_division }))}
                                                        disabled={true}
                                                    />
                                                    <FormField
                                                        label="Part de cette division dans la mission"
                                                        id="principalDivisionPart"
                                                        type="number"
                                                        placeholder="Part de la division"
                                                        value={repartition.principalDivision.part}
                                                        onChange={handlePrincipalDivisionPartChange}
                                                        error={errorMessage}
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
                                                            label="Part de cette division dans la mission"
                                                            id={`secondaryDivisionPart-${index}`}
                                                            type="number"
                                                            placeholder="Part de la division"
                                                            value={div.part}
                                                            onChange={(e) => handleSecondaryDivisionChange(index, 'part', e.target.value)}
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
                    <Modal.Title>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginRight: '8px' }} />
                        Succès
                    </Modal.Title>
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

