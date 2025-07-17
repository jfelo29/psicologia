import primeraFoto from '../../../images/primera.png'
import Calendario from '../../../images/calendario.png'
import conoceMas from '../../../images/conoceMas.png'
import React from 'react'
export default function Inicio() {
 return (
  <section className="inicio" id='inicio'>
   <div className="first__inicio">
    <div className="left__fist__inicio">
     <h1 className="inicio__title">Bienestar mental,</h1>
     <h2 className="inicio__subtitle"> cuidado profesional</h2>
     <p className="inicio__text">cuidado profesional
      Te acompaño en tu proceso de crecimiento personal y bienestar emocional. Consultas presenciales y online con enfoque personalizado.</p>
     <div className='inicio__btns'>
      <div className="inicio__btn-reservation">
       <img src={Calendario} alt="logo para agendar cita" className='inicio__image-calendar' />
       <button className="inicio__botton-text inicio__reservation">Reserva Cita</button></div>
      <div className="inicio__btn-about">
       <img src={conoceMas} alt="logo para ir a mas informacion sobre la terapia de psicologia" className='inicio__image-conocemas' />
       <button className="inicio__botton-text inicio__about">Conoce Más</button>
      </div>
     </div>
    </div>
    <div className="right__fist__inicio">
     <img src={primeraFoto} alt="imagen de atencion de personas online" className="inicio__img1" />
    </div>
   </div>

  </section>
 )
}