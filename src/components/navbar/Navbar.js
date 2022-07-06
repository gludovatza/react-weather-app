import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <div className={`container flex mx-auto p-5 justify-between align-middle`}>
            <div className={`text-3xl font-bold ${style.text__color} my-auto`}>Weather Project</div>
            <div className={`flex`}>
                <a href={'https://weather.com/'} className={`${style.button__weather} py-2 px-9 mr-10`}>Weather</a>
                <a href={'https://github.com/'} className={`${style.button__github} py-2 px-9`}>GitHub</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar