import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full h-3 bg-gray-300 rounded">
      <div
        className="h-3 bg-blue-500 rounded"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
