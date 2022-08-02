import React from 'react'
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={`${style.full__container} container mx-auto flex align-middle flex-col justify-center`}>
        <svg viewBox="0 0 48 48" className={'mx-auto text-center'} xmlns="http://www.w3.org/2000/svg" height="150" width="150">
          <path 
            stroke="#c6d3cc" 
            fill="#c6d3cc" 
            d="M24.05 24.45ZM2 42 24 4l22 38Zm20.7-11.4h3V19.4h-3Zm1.5 5.55q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425ZM7.2 39h33.6L24 10Z"
          />
        </svg>
        <h1 className={'inline text-center text-4xl'}>404</h1>
        <h4 className={'inline text-center'}>Page not found!</h4>
    </div>
  )
}

export default NotFound