// src/components/ProblemOfTheDay.js
import React, { useState } from 'react';
import axios from 'axios';

const ProblemOfTheDay = () => {
    const [problem, setProblem] = useState(null);

    const fetchProblemOfTheDay = async () => {
        try {
            const response = await axios.get('https://leetcode-buddy-9528fc5b9687.herokuapp.com/api/problem_of_the_day/');
            setProblem(response.data);
        } catch (error) {
            console.error("Error fetching the problem of the day", error);
        }
    };

    return (
        <div className="p-4">
            <button onClick={fetchProblemOfTheDay} className="bg-blue-500 text-white p-2 rounded">
                Problem of the Day
            </button>
            {problem && (
                <div className="mt-4">
                    <h2 className="text-2xl">{problem.title}</h2>
                    <p>{problem.description}</p>
                    <p><strong>Category:</strong> {problem.category}</p>
                    <p><strong>Difficulty:</strong> {problem.difficulty}</p>
                    <a href={problem.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Problem</a>
                </div>
            )}
        </div>
    );
};

export default ProblemOfTheDay;
