import React from 'react'
import style from "../mainPage/CategoriesCard.module.css"

function CategoriesCard({ category }) {
    console.log("Category data: " , category)

  return (
    <div className={style.categoryCard}>
        <img className={style.categoryImage} src={`http://localhost:3333${category.image}`} alt={category.title}/>
        <h3>{category.title}</h3>
      
    </div>
  )
}

export default CategoriesCard;


