import React from 'react'
import style from "../notFoundPage/NotFoundPage.module.css"
import errorImg from "../notFoundPage/imageError.png"


function NotFoundPage() {
  return (
    <div>
      <div className={style.errorWrapper}>
        <div className={style.errorImgWrapper}>
          <img className={style.errorImage} src={errorImg} alt="Error image" />
        </div>
        <div className={style.pageContentWrapper}>
          <div className={style.infoWrapper}>
            <h2>Page Not Found</h2>
            <p>We’re sorry, the page you requested could not be found.<br></br>
              Please go back to the homepage.</p>
          </div>

          <button className={style.goHomeBtn}>Go Home</button>
        </div>
      </div>

    </div>
  )
}

export default NotFoundPage;
