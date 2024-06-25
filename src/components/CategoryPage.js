import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        <div>
            <h2>Problems in {categoryName}</h2>
            <ul>
                {problems.map((problem) => (
                    <div>
                        <li key={problem.id}>{problem.title}</li>
                        <li><a href={problem.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Problem</a></li>
                    </div>
                    
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
