import React from 'react'
import baner from "./baner.jpg"
import style from "../mainPage/Baner.module.css"

function Baner() {
  return (
    <div >
      <div className={style.banerContainer}>
        <img src={baner} alt='banerImg' className={style.banerImg}></img>
      </div>
      <div className={style.overlayText}>
        <p className={style.titleTxt}>Amazing Discounts <br></br> on Garden Products!</p>
        <button className={style.btnCheck}>Check out</button>
      </div>



    </div>
  )
}

export default Baner;