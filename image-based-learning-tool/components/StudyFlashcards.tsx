import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SettingsPanel from './SettingsPanel';
import FlashcardCustomization from './FlashcardCustomization';



const StudyFlashcards = () => {
    // JUST FOR DEMONSTRATION
    const [currentSet, setCurrentSet] = useState({
        title: 'Sample Flashcard Set',
        category: 'Animals',
        cards: [
            {
                image: '/sample-image.jpg',
                name: 'Plate Limpet',
              },
              {
                image: '/sample-image2.jpg',
                name: 'Aggregating Anemone',
              },
        ],
      });

  const [currentCard, setCurrentCard] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [studyMode, setStudyMode] = useState<'multipleChoice' | 'timedQuiz'>(
    'multipleChoice'
  );

  const [flashcardBgColor, setFlashcardBgColor] = useState('white');
  const [flashcardFontStyle, setFlashcardFontStyle] = useState('serif');

  

  if (!currentSet) {
    return <p className="text-gray-500">No flashcard set selected.</p>;
  }

  const handleSubmit = () => {
    // JUST FOR DEMONSTRATION, ALWAYS +1 WHEN HANDLING SUBMIT.
    setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % currentSet.cards.length);
  };

  return (
  <div>
    <FlashcardCustomization
    onCustomize={(bgColor, fontStyle) => {
        setFlashcardBgColor(bgColor);
        setFlashcardFontStyle(fontStyle);
        }}
    />
    <SettingsPanel onChangeMode={(mode) => setStudyMode(mode)} />
      <h2 className="text-2xl mb-4">{currentSet.title}</h2>
      <p className="text-gray-500 mb-4">{currentSet.category}</p>
      {/* Display the current card's image */}
      <div
      className={`mb-4 p-4 rounded ${flashcardFontStyle}`}
      style={{ backgroundColor: flashcardBgColor }}
      >
        <img src={currentSet.cards[currentCard].image} alt="Flashcard" />
      </div>
      <ProgressBar current={currentCard + 1} total={currentSet.cards.length} />
        <p className="mt-4"> 
            Correct Answers: {correctAnswers} / {currentSet.cards.length}
        </p>
      {/* Input field for entering the name */}
      <input
        type="text"
        className="border rounded p-2 mb-4"
        placeholder="Enter the name"
      />
      <div className="flex justify-between">
        {/* Button for submitting the answer */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit} title="Submit your answer">
          Submit
        </button>
        {/* Button for navigating to the next card */}
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleNextCard} title="Go to the next flashcard">
          Next Card
        </button>
      </div>
      
    </div>
  );
};

export default StudyFlashcards;
