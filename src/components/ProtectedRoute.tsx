import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Role } from '../utils/roles';

interface ProtectedRouteProps {
  element: React.ReactElement;
  requiredRole: Role;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, requiredRole }) => {
  const { role, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!role || role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
