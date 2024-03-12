import React from 'react'
import { Link } from 'react-router-dom'
import style from "../categoriesPage/CategoriesPage.module.css"
import CategoriesContainer from '../mainPage/CategoriesContainer'
export default function CategoriesPage() {
  return (
    <div>
      <div className={style.btnsWrapper}>
        <Link to="/" className={style.styleBtn}>Main page</Link>
        <div className={style.lineBtns}></div>
        <button className={style.styleBtn}>Categories</button>
      </div>

      <CategoriesContainer />
    </div>
  )
}
