import React from 'react';

interface FlashcardCustomizationProps {
  onCustomize: (bgColor: string, fontStyle: string) => void;
}

const FlashcardCustomization: React.FC<FlashcardCustomizationProps> = ({
  onCustomize,
}) => {
  const fontStyles = ['serif', 'sans-serif', 'monospace'];

  const handleCustomize = (bgColor: string, fontStyle: string) => {
    onCustomize(bgColor, fontStyle);
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h3 className="font-bold text-xl mb-4">Customize Flashcard Appearance</h3>
      <p>
        Choose your preferred background color and font style for flashcards.
        For better readability and focus, use contrasting colors and clear
        fonts.
      </p>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => handleCustomize('white', fontStyles[0])}
        >
          White Background
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleCustomize('lightgray', fontStyles[1])}
        >
          Light Gray Background
        </button>
      </div>
    </div>
  );
};

export default FlashcardCustomization;
