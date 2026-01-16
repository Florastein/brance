import React from 'react';
import { Activity as ActivityType } from '../types';

interface ActivityProps {
  activity: ActivityType;
}

const Activity: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <div className="p-2 mb-2 bg-white rounded-lg shadow-xs">
      <p>{activity.title}</p>
    </div>
  );
};

export default Activity;
