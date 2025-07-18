import React from 'react';
import perfilImage from '../../../images/aboutme.png'

export default function Aboutme() {
 return (
  <section className='aboutme'>
   <div className='aboutme__container'>
    <div className='aboutme__image'>
     <img src={perfilImage} alt="imagen de psicologo" className='aboutme__image-profile' />
    </div>
    <div className='aboutme__text'>
     <h1 className='aboutme__title'>Sobre mi</h1>
     <p className='aboutme__text-paragraph'>
      Soy María González, psicóloga clínica con más de 15 años de experiencia ayudando a personas a superar sus dificultades emocionales y alcanzar su bienestar mental.


     </p>
     <p className='aboutme__text-paragraph'>Mi enfoque terapéutico se basa en la terapia cognitivo-conductual integrada con técnicas de mindfulness y terapias de tercera generación. Creo firmemente en la capacidad de cada persona para crecer y cambiar, y mi rol es acompañarte en ese proceso de transformación.</p>
     <p className='aboutme__text-paragraph'>Trabajo tanto con adultos como adolescentes, ofreciendo un espacio seguro, confidencial y libre de juicios donde puedas explorar tus pensamientos y emociones.</p>
     <h3 className='aboutme__title-academy'>Formación Académica</h3>
     <li className='aboutme__text-item'>Licenciatura en Psicología - Universidad Complutense Madrid</li>
     <li className='aboutme__text-item'>Máster en Psicología Clínica y de la Salud</li>
     <li className='aboutme__text-item'>
      Especialización en Terapia Cognitivo-Conductual</li>
     <li className='aboutme__text-item'>Formación en Mindfulness y Terapias de Tercera Generación</li>
     <li className='aboutme__text-item'>
      Colegiada Nº M-15789 - Colegio Oficial de Psicólogos</li>
     <div className='aboutme__especifications'>
      <h2 className='aboutme__title-specifications'>Áreas de Especializacións</h2>
      <div className='aboutme__text-specification'>

       <lu className='aboutme__specification-item'>Trauma y Estrés Postraumático</lu>
       <lu className='aboutme__specification-item'>Terapia de Pareja y Familia</lu>
       <lu className='aboutme__specification-item'>Desarrollo Personal y Autoestima</lu>
       <lu className='aboutme__specification-item'>Gestión del Estrés Laboral</lu>
       <lu className='aboutme__specification-item'>Trastornos Alimentarios</lu>
       <lu className='aboutme__specification-item'>Ansiedad y Trastornos del Estado de Ánimo</lu>
      </div>
     </div>
    </div>
   </div>
   <div className='aboutme__filosofia'>
    <h2 className='aboutme__title'>Mi Filosofía Terapéutica</h2>
    <p className='aboutme__filosofia-paragraph'>"Cada persona tiene en su interior los recursos necesarios para sanar y crecer. Mi trabajo es ayudarte a descubrir esos recursos y acompañarte en el camino hacia una vida más plena y auténtica. La terapia es un espacio de encuentro contigo mismo, donde puedes explorar, comprender y transformar aquello que te limita."</p>
    <p className='about__name'>- Dra. Laura Diaz</p>

   </div>
  </section >
 )
}