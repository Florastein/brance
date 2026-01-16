import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseBuilder from './pages/CourseBuilder';
import Assessments from './pages/Assessments';
import Analytics from './pages/Analytics';
import Messaging from './pages/Messaging';
import Auth from './pages/Auth';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import MultiRoleProtectedRoute from './components/MultiRoleProtectedRoute';
import { Role } from './utils/roles';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-builder" element={<MultiRoleProtectedRoute element={<CourseBuilder />} requiredRoles={[Role.Admin, Role.Lecturer]} />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/analytics" element={<ProtectedRoute element={<Analytics />} requiredRole={Role.Admin} />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
