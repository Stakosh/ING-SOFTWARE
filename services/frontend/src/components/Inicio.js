import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgFondo from '../img/img-fondo.jpeg';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Inicio() {
    const navigate = useNavigate();  // Hook to enable navigation

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${ImgFondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    height: '100vh',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                className="mb-3"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => navigate('/justificaciones')}
                            >
                                Justificaciones
                            </Button>
                        </Row>

                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                className="mb-3"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => navigate('/cursos')}
                            >
                                Próximos Cursos
                            </Button>
                        </Row>

                        <Row xs="auto" className="justify-content-center">
                            <Button
                                variant="light"
                                style={{ width: '50%', padding: '10px', color: 'black', backgroundColor: 'whitesmoke' }}
                                onClick={() => navigate('/asistencias')}
                            >
                                Asistencias
                            </Button>
                        </Row>
                    </Row>
                </Container>
            </div>
            <Col>
                <Container>
                    {/* Additional content can go here */}
                </Container>
            </Col>
        </div>
    );
}

export default Inicio;
