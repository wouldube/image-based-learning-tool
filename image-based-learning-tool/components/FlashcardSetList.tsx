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
                <button className="mx-2 text-blue-500" title="Edit the flashcard set">Edit 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11.3 1.5a2.9 2.9 0 0 1 4 0l1.5 1.5a2.9 2.9 0 0 1 0 4l-8 8-5 1 1-5 8-8zm-9 9l4-1-3-3-1 4z" />
                  </svg>
                </button>
                
                <button className="text-red-500">Delete
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1z" />
                  <path fill-rule="evenodd" d="M4 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4zm1 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" clip-rule="evenodd" />
                  </svg>
                </button>
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
