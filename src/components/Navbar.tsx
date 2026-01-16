import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContextDefinition';
import { auth } from '../firebase';
import { Role } from '../utils/roles';

const Navbar = () => {
  const { user, role } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Learning Platform</Link>
        <div>
          <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
          {(role === Role.Admin || role === Role.Lecturer) && (
            <Link to="/course-builder" className="px-3 py-2 rounded-md text-sm font-medium">Course Builder</Link>
          )}
          <Link to="/assessments" className="px-3 py-2 rounded-md text-sm font-medium">Assessments</Link>
          {role === Role.Admin && (
            <Link to="/analytics" className="px-3 py-2 rounded-md text-sm font-medium">Analytics</Link>
          )}
          <Link to="/messaging" className="px-3 py-2 rounded-md text-sm font-medium">Messaging</Link>
          {user ? (
            <button onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium">Logout</button>
          ) : (
            <Link to="/auth" className="px-3 py-2 rounded-md text-sm font-medium">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
