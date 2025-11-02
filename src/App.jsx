import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />
      <main className="flex-grow">
        <Landing />
        <CartPage />
      </main>
    </div>
  );
}

export default App;
