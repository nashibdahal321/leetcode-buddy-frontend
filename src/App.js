// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProblemOfTheDay from './components/ProblemOfTheDay';
import Categories from './components/Categories';
import CategoryPage from './components/CategoryPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Leetcode Buddy</h1>
            </header>
            <main>
                <ProblemOfTheDay />
            </main>
            <Router>
                <Routes>
                    <Route path="/" element={<Categories />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
