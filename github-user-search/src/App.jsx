import React from 'react';
import Search from './components/Search'; // Import the new Search component
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          GitHub User Search
        </h1>
        <p className="text-gray-500 mt-2">Find basic details for any GitHub user.</p>
      </header>
      
      <main className="w-full max-w-2xl">
        {/* Integrate the Search Component here */}
        <Search />
      </main>
      
      <footer className="mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GitHub User Search App
      </footer>
    </div>
  );
}

export default App;