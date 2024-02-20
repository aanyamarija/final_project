// CategoriesContainer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import CategoriesCard from './CategoriesCard';
import style from "../mainPage/CategoriesContainer.module.css";

function CategoriesContainer() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3333/categories/all");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className={style.categoriesWrapper}>
            <div className={style.btnTitleWrapper}>
                <div className={style.titleWrapper}>
                    <h2>Categories</h2>
                </div>
                <div className={style.lineBtnWrapper}>
                    <div className={style.line}></div>
                    <Link to="/categories" className={style.ctgBtn}>All categories </Link>
                </div>
            </div>

            <div className={style.categoriesContainer}>
                {categories.map(category => (
                    <Link key={category.id} to={`/category/products/${category.id}`}>
                        <CategoriesCard category={category} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoriesContainer;
