import React from 'react'


import CurrentUserContext from '../contexts/currentUserContext'
export default function Header() {
 const CurrentUser = React.useContext(CurrentUserContext)
 return (
  <header className="header">
   <div className="header__left">
    <div className="header__name">Dra. Laura Diaz</div>
    <div className='header__profesion'>psicologa clinica</div>
   </div>
   <div className="header__right">
    <div className="header__inicio">inicio</div>
    <div className="header__servicios">servicios</div>
    <div className="header__sobre__mi">sobre Mi</div>
    <div className="header__contacto">contacto</div>
    <button className="header__btn">Reserva Cita</button>
   </div>
  </header>
 )
} 