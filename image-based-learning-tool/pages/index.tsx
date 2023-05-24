import { useState } from 'react';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import CreateFlashcardSet from '../components/CreateFlashcardSet';
import FlashcardSetList from '../components/FlashcardSetList';
import StudyFlashcards from '../components/StudyFlashcards';

import { useEffect } from 'react';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const [mode, setMode] = useState<'create' | 'study'>('create');

  const fetchMessages = async () => {
    try {
      const flashcardShufflerServiceResponse = await axios.get('/api/flashcard-shuffler');
  
      console.log('Received message from Flashcard Shuffler Service:', flashcardShufflerServiceResponse.data.message);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  
  fetchMessages();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="font-bold text-4xl mb-4">Image-based Learning Tool</h1>
        <nav className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setMode('create')}
            title="Create new flashcards to enhance your learning experience"
          >
            Create Flashcards
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setMode('study')}
            title="Study your flashcards to improve memory retention"
          >
            Study Flashcards
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            title="Improve memory by practicing with images and tracking progress."
          >
            ?
          </button>
        </nav>
      </header>
      <main className="w-full max-w-5xl">
        {mode === 'create' ? (
          <div>
            <h2 className="font-bold text-3xl mt-4 mb-2">Create Flashcards</h2>
            {
              <div>
              <CreateFlashcardSet />
              <FlashcardSetList />
            </div>
            }
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-3xl mt-4 mb-2">Study Flashcards</h2>
            <StudyFlashcards />
          </div>
        )}
      </main>
    </main>
  );
};

export default Home;
