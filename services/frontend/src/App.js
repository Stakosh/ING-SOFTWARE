
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Login from './components/Login';
import React from 'react';




const App = () => {
    return (
        <AuthProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Navigate to="/login" replace />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/inicio" element={<ProtectedRoute component={Inicio} />} />

                        </Routes>
                    </Layout>
                </Router>
        </AuthProvider>
    );
};

export default App;