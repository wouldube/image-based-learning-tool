import React, { useState } from 'react';

const FlashcardSetList = () => {
    const [flashcardSets, setFlashcardSets] = useState([
        // JUST FOR DEMONSTRATION
        {
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
        },
      ]);


  return (
    <div className="mt-6">
      <h2 className="text-2xl mb-4">Flashcard Sets</h2>
      {flashcardSets.length === 0 ? (
        <p className="text-gray-500">No flashcard sets found.</p>
      ) : (
        <ul>
          {flashcardSets.map((set, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{set.title}</span>
              <div>
                {/* ICONS TO EDIT AND DELETE???? */}
                <button className="mx-2 text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* DEMONSTRATION - REDO - UNDO - NOT FUNCTIONAL */}
      <div className="mt-4">
        <button title="Undo (not functional yet)" className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
          Undo
        </button>
        <button title="Redo (not functional yet)" className="bg-gray-500 text-white px-4 py-2 rounded">
          Redo
        </button>
      </div>
    </div>
  );
};

export default FlashcardSetList;
