import React from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">EBAC Sports</h1>
          <Cart />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProductList />
      </main>
    </div>
  );
}

export default App;