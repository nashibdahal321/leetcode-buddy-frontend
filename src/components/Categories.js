// src/components/Categories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://leetcode-buddy-9528fc5b9687.herokuapp.com/api/category/all/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    to={`/category/${category.name}`}
                    className="category-box"
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default Categories;
