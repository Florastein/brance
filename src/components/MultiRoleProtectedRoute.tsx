import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextDefinition';
import { Role } from '../utils/roles';

interface MultiRoleProtectedRouteProps {
  element: React.ReactElement;
  requiredRoles: Role[];
}

const MultiRoleProtectedRoute: React.FC<MultiRoleProtectedRouteProps> = ({ element, requiredRoles }) => {
  const { role, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default MultiRoleProtectedRoute;
