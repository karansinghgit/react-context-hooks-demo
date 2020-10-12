import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggler />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;