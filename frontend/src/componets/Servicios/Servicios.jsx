import React from 'react'
export default function Servicios() {
 return (
  <section className="servicios" id="servicios">
   <div className="servicios__container">
    <h2 className="servicios__title">Servicios Profesionales</h2>
    <p className="servicios__text">Ofrezco diferentes modalidades de terapia adaptadas a tus necesidades específicas, con un enfoque humanístico y basado en evidencia científica.</p>
   </div>
   <div className="servicios__cards">
    <div className="servicios__card">
     <div className="servicios__cards-individual">
      <h3 className="servicios__cards-title">Terapia Individual</h3>
      <p className="servicios__cards-text">Sesiones personalizadas para abordar ansiedad, depresión, estrés y crecimiento personal.</p>
      <ul className="servicios__benefits">Beneficios:</ul>
      <li className="servicios__benefits-item">Enfoque personalizado</li>
      <li className="servicios__benefits-item">Confidencialidad tota</li>
      <li className="Servicios__benefits-item">Flexibilidad horaria</li>
     </div>
    </div>
    <div className="servicios__card">
     <div className="servicios__cards-pareja">
      <h3 className="servicios__cards-title">Terapia de Pareja</h3>
      <p className="servicios__cards-text">Mejora la comunicación y fortalece la relación con tu pareja.</p>
      <ul className="servicios__benefits">Beneficios:</ul>
      <li className="servicios__benefits-item">Comunicación efectiva</li>
      <li className="servicios__benefits-item">Resolución de conflictos</li>
      <li className="Servicios__benefits-item">Fortalecimiento del vínculo</li>
     </div>
    </div>
    <div className="servicios__card">
     <div className="servicios__cards-Familiar">
      <h3 className="servicios__cards-title">Terapia Familiar</h3>
      <p className="servicios__cards-text">Sesiones personalizadas para abordar ansiedad, depresión, estrés y crecimiento personal.</p>
      <ul className="servicios__benefits">Beneficios:</ul>
      <li className="servicios__benefits-item">Dinámicas saludables</li>
      <li className="servicios__benefits-item">Comunicación familiar</li>
      <li className="Servicios__benefits-item">Resolución de conflictos</li>
     </div>
    </div>
    <div className="servicios__card">
     <div className="servicios__cards-Urgencia">
      <h3 className="servicios__cards-title">Consultas de Urgencia</h3>
      <p className="servicios__cards-text">Atención inmediata para situaciones de crisis o emergencias emocionales.</p>
      <ul className="servicios__benefits">Beneficios:</ul>
      <li className="servicios__benefits-item">Atención inmediata</li>
      <li className="servicios__benefits-item">Contención emocional</li>
      <li className="Servicios__benefits-item">Plan de acción</li>
     </div>
    </div>
   </div>

   <div className="servicios__notsure">
    <h2 className='servicios__notsure-title'>¿No estás seguro qué servicio necesitas?</h2>
    <p className='servicios__notsure-text'>Te ofrezco una consulta inicial gratuita de 20 minutos para evaluar tu situación y recomendarte el mejor enfoque terapéutico.</p>
    <button className="servicios__btn">Consulta inicial gratuita</button>

   </div>

  </section>

 )
}