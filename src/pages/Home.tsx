import React from 'react';

const services = [
  {
    name: 'Authentication',
    description: 'Manages user identity, registration, login, and access control.',
  },
  {
    name: 'Course Management',
    description: 'Handles the creation, organization, and delivery of educational content.',
  },
  {
    name: 'Assessments',
    description: 'Manages quizzes, assignments, and other forms of assessment.',
  },
  {
    name: 'Analytics',
    description: 'Gathers and analyzes data on user engagement and learning outcomes.',
  },
  {
    name: 'Messaging',
    description: 'Facilitates real-time communication between users.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Welcome to the Modular Learning Platform</h1>
          <p className="mt-4 text-xl text-gray-600">A microservice-ready application for a modern learning experience.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;