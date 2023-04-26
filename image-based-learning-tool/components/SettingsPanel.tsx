import React from 'react';

interface SettingsPanelProps {
  onChangeMode: (mode: 'multipleChoice' | 'timedQuiz') => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onChangeMode }) => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h3 className="font-bold text-xl mb-4">Study Mode</h3>
      <p>
        Choose your preferred study mode. You can switch modes at any time.
      </p>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => onChangeMode('multipleChoice')}
        >
          Multiple Choice
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onChangeMode('timedQuiz')}
        >
          Timed Quiz
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
