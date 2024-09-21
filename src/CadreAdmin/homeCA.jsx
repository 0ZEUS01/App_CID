import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBriefcase, 
    faCalendarAlt,
    faHome,
    faArrowRight,
    faHeart,
    faListAlt,
    faChartBar
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';
import Chart from 'react-apexcharts';

const HomeCA = () => {
    const [affaireStats, setAffaireStats] = useState({
        total: 0,
        enCours: 0,
        terminees: 0,
    });

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: true
                }
            },
            xaxis: {
                categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
            },
            colors: ['#36A2EB']
        },
        series: [
            {
                name: "Affaires terminées",
                data: []
            }
        ]
    });

    useEffect(() => {
        fetchAffaireStats();
        fetchChartData();
    }, []);

    const fetchAffaireStats = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/affaires/stats');
            setAffaireStats(response.data);
        } catch (error) {
            console.error('Error fetching affaire stats:', error);
        }
    };

    const fetchChartData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/affaires/monthly-stats');
            setChartData(prevState => ({
                ...prevState,
                series: [{
                    name: "Affaires terminées",
                    data: response.data
                }]
            }));
        } catch (error) {
            console.error('Error fetching chart data:', error);
        }
    };

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="container">
                    <div className="page-inner">
                        <div className="page-header">
                            <h4 className="page-title">Accueil</h4>
                            <ul className="breadcrumbs">
                                <li className="nav-home">
                                    <Button variant="link" className="nav-link">
                                        <FontAwesomeIcon icon={faHome} />
                                    </Button>
                                </li>
                                <li className="separator">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </li>
                                <li className="nav-item">
                                    <Button variant="link" className="nav-link">Accueil</Button>
                                </li>
                            </ul>
                        </div>
                        <h4>Aperçu des Affaires</h4>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Card className="card-stats card-round">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={4}>
                                                <div className="icon-big text-center">
                                                    <FontAwesomeIcon icon={faBriefcase} className="text-warning" />
                                                </div>
                                            </Col>
                                            <Col xs={8} className="col-stats">
                                                <div className="numbers">
                                                    <p className="card-category">Affaires Totales</p>
                                                    <Card.Title as="h4">{affaireStats.total}</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr />
                                        <div className="stats">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Mis à jour à l'instant
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="card-stats card-round">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={4}>
                                                <div className="icon-big text-center">
                                                    <FontAwesomeIcon icon={faListAlt} className="text-success" />
                                                </div>
                                            </Col>
                                            <Col xs={8} className="col-stats">
                                                <div className="numbers">
                                                    <p className="card-category">Affaires en Cours</p>
                                                    <Card.Title as="h4">{affaireStats.enCours}</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr />
                                        <div className="stats">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Mis à jour à l'instant
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="card-stats card-round">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={4}>
                                                <div className="icon-big text-center">
                                                    <FontAwesomeIcon icon={faChartBar} className="text-danger" />
                                                </div>
                                            </Col>
                                            <Col xs={8} className="col-stats">
                                                <div className="numbers">
                                                    <p className="card-category">Affaires Terminées</p>
                                                    <Card.Title as="h4">{affaireStats.terminees}</Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr />
                                        <div className="stats">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Mis à jour à l'instant
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h4">Performance des Affaires</Card.Title>
                                        <p className="card-category">Affaires terminées par mois</p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
                                    </Card.Body>
                                    <Card.Footer>
                                        <hr />
                                        <div className="stats">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Mis à jour à l'instant
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
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
                                2024, made with <FontAwesomeIcon icon={faHeart} className="heart text-info" /> by
                                <a href="http://cid.co.ma/"> CID</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default HomeCA;
