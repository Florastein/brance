import React from 'react';
import { Subsection as SubSectionType, Activity as ActivityType } from '../types';
import Activity from './Activity';

interface SubsectionProps {
  subsection: SubSectionType;
}

const Subsection: React.FC<SubsectionProps> = ({ subsection }) => {
  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold">{subsection.title}</h3>
      <div className="mt-2">
        {subsection.activities.map(activity => (
            <Activity key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Subsection;
