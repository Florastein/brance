import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Section as SectionType, Subsection as SubSectionType } from '../types';
import Subsection from './Subsection';

interface SectionProps {
  section: SectionType;
  toggleVisibility: (sectionId: string) => void;
  deleteSection: (sectionId: string) => void;
  addSubsection: (sectionId: string) => void;
  deleteSubsection: (sectionId: string, subsectionId: string) => void;
}

const Section: React.FC<SectionProps> = ({ section, toggleVisibility, deleteSection, addSubsection, deleteSubsection }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: section.isVisible ? 1 : 0.5,
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{section.title}</h2>
        <div className="flex items-center">
            <button onClick={() => deleteSection(section.id)} className="text-red-500 hover:text-red-700 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          <button onClick={toggleCollapse} className="text-gray-500 hover:text-gray-700 mr-4">
            {isCollapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            )}
          </button>
          <button onClick={() => toggleVisibility(section.id)} className={`text-gray-500 hover:text-gray-700 ${!section.isVisible ? 'text-red-500' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.001 0-.001 0 0 0z" /></svg>
          </button>
        </div>
      </div>
      {!isCollapsed && (
        <div className="mt-4">
          {section.subsections.map(subsection => (
              <Subsection key={subsection.id} subsection={subsection} deleteSubsection={(subsectionId) => deleteSubsection(section.id, subsectionId)} />
          ))}
            <button onClick={() => addSubsection(section.id)} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add Subsection
            </button>
        </div>
      )}
    </div>
  );
};

export default Section;
