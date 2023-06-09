import React, { useState } from 'react';

const CreateFlashcardSet = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleForm}
        title="Create a new flashcard set or hide the form"
      >
        {showForm ? 'Hide Form' : 'Create Flashcard Set'}
      </button>
      {showForm && (
        <>
        <form className="mt-4">
          <label className="block">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Flashcard Set Title"
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Category:</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Category"
            />
          </label>
          {/* UPLOAD IMAGE??? */}
        </form>
          <p className="text-sm text-gray-600 mt-2">
            Note: Images uploaded should not exceed 500x500 pixels. The maximum number of flashcard sets allowed is 100.
          </p>
        </>
      )}
    </div>
  );
};

export default CreateFlashcardSet;
