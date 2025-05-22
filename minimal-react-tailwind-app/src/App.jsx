import React from 'react';
import { ArticlesDataTable } from './components/ArticlesDataTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Minimal React Tailwind App</h1>
      <ArticlesDataTable />
    </div>
  );
}

export default App;
