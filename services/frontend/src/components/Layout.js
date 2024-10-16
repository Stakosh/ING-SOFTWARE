import React from 'react';
import logo from '../img/logo-sup.png';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from './AuthContext'; // Make sure to import useAuth
import '../App.css';

const Layout = ({ children }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <Navbar bg="white" variant="white" expand="lg" className="justify-content-between">
                <Container>
                    <Navbar.Brand as={Link} to="/inicio">
                        <Image src={logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto'>
                            <Link to="/proximos-cursos" className='nav-link'>
                                Próximos Cursos
                            </Link>
                            <Link to="/justificaciones" className='nav-link'>
                                Justificaciones
                            </Link>
                            <Link to="/asistencias" className='nav-link'>
                                Asistencias
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-flex align-items-center">
                        <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                            <FiLogOut size={20} />
                        </Button>
                    </div>
                </Container>
            </Navbar>

            <div style={{ width: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
