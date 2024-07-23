// src/components/CategoryPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await axios.post('https://leetcode-buddy-9528fc5b9687.herokuapp.com/api/category/problems/', { category_name: categoryName });
                setProblems(response.data);
            } catch (error) {
                console.error('Error fetching problems:', error);
            }
        };

        fetchProblems();
    }, [categoryName]);

    return (
        <div className="category-page">
            <h2>Problems in {categoryName}</h2>
            <ul className="problems-list">
                {problems.map((problem) => (
                    <li key={problem.id} className="problem-item">
                        <span className="problem-title">{problem.title}</span>
                        <a href={problem.link} className="view-problem-link" target="_blank" rel="noopener noreferrer">View Problem</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
