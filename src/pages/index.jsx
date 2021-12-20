import React from 'react';
import '../styles/styleIndex.css';
import  logo  from '../imagenes/logoinnovatic1.png';
import  monitor  from '../imagenes/monitor-g1de753904_1920.jpg';
import  anisha  from '../imagenes/avatar-anisha.png';
import  shanai  from '../imagenes/avatar-shanai.png';
import  richard  from '../imagenes/avatar-richard.png';
import { Link } from 'react-router-dom'


const IndexPrinciPal = () => {
    return (
        <div className='todo'>
            <header className='header'>

            <section class="logo-negro1">
                <img src={logo} alt="logo" />
            </section>

            <section className="menu1">
                <nav>
                    <ul>
                        <li className="menu-principal1"><a href="#">Inicio</a></li>
                        <li className="menu-principal1"><a href="#">Acerca de</a></li>
                        <li className="menu-principal1"><a href="#">Proyectos</a></li>
                        <li className="menu-principal1"><a href="#">Aprobación Inscripciones</a></li>
                        <li className="menu-principal1"><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <Link to='/auth/login'>
                    <button class="boton1">Get Started</button>
                </Link>
            </section>

            </header>

            <main>

            <article id="caja-introducción1">

                <section id="caja-titulo1">
                    <div>
                        <h1 className='h11'>INNNOVA TIC<br />  Empresa de Proyectos </h1>
                    </div>

                    <p class="parrafo1">Empresa de Proyectos dedicada al desarrollo Web, donde<br /> 
                        te vas acercar cada vez 
                        más al mundo de la tecnología, por medio<br />  
                        del aprendizaje, capacitación, el servicio de asesoria para<br /> 
                        tus proyectos, para darle satisfacción a tus necesidades. 
                    </p>

                    
                </section>

                <section id="cajaImg">
                    <img id="grafica1" src={monitor} alt="illustration-intro" />
                </section>

            </article>



            <setion class="container1">

                <h2 id="titulo21">¿Qué dice nuestra comunidad?</h2>

                <article id="container-hijo1">

                    <div className="info center1">
                        <img className="avatar center1" src={anisha} alt="Profesor" />
                        <h5 className='h51'>Ali Gómez. Profesora</h5>
                        <p>“La empresa Innova Tic está en una de las empresas 
                            más competitivas en el mercado, para brindar el conocimiento y capacitación a cada uno de sus estudiantes.”</p>
                    </div>
                    <div className="info center1">
                        <img className="avatar center1" src={shanai} alt="Estudiante"/>
                        <h5 className='h51'>Shanaí López. Estudiante</h5>

                        <p>“Me siento muy feliz estudiando en Innova Tic, porque tienen profesores muy capacitados y con una excelente
                            pedagogía y experiencia para dar a conocer su conocimiento, brindándonos y seguridad y motivación en sus contenidos.”</p>
                    </div>

                    <div className="info center1">
                        <img className="avatar center1" src={richard} alt="Lider" />
                        <h5 className='h51'>Richard Contreras. Lider</h5>

                        <p>“Somos una de las empresas lideres, que nos preocupamos para que nuestros 
                            docentes esten actualizados y capacitados y que su información llegue 
                            de una manera adecuada a nuestros estudiantes, por medios de proyectos".</p>
                    </div>

                </article>
                <Link to='/auth/login'>
                    <button className="boton center1">Get Started</button>
                </Link>
            </setion>

            

            <section id='section1'>

                <p>INNOVA TIC. Empresa de Proyectos</p>

                <button className="btn1">Get Started</button>
            </section>

            </main>

            
            <footer className='footer1'>
            <div className="Caja-Principal1">

                <div id="copyright-mobile1" class="center1">
                    <h6>Copyright 2020. All Rights Reserved</h6>
                </div>
                <div className="caja1">
                    <div className="center1">
                        <img className="logo1" src={logo} alt="logo" />
                    </div>

                    <div className="iconos center1">
                        <nav>
                            <a href="#" className="icono1"><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href="#" className="icono1"><i className="fab fa-youtube-square fa-2x"></i></a>
                            <a href="#" className="icono1"><i className="fab fa-twitter-square fa-2x"></i></a>
                            <a href="#" className="icono1"><i className="fab fa-pinterest-square fa-2x"></i></a>
                            <a href="#" className="icono1"><i className="fab fa-instagram-square fa-2x"></i></a>
                        </nav>
                    </div>
                </div>


                <div className="caja21">
                    <div className="menu11">
                        <nav>
                            <ul>
                                <li><a href="#" className="color1">Home</a></li>
                                <li><a href="#" className="color1">Pricing</a></li>
                                <li><a href="#" className="color1">Products</a></li>
                                <li><a href="#" className="color1">About Us</a></li>
                            </ul>
                        </nav>

                    </div>
                    <div className="menu2">
                        <ul>
                            <li><a href="#" className="color1">Careers</a></li>
                            <li><a href="#" className="color1">Commnunity</a></li>
                            <li><a href="#" className="color1">Policy</a> </li>
                        </ul>
                    </div>
                </div>

                <div className="caja3 center1">
                    <div>
                        <form action="#">
                            <input className='input1 input2' type="email" id="email" placeholder="Update in your inbox..." required /><button className="botonF1">G0</button>
                        </form>
                    </div>

                    <div id="copyright-escritorio1" className="center">
                        <h6 className='h6'>Copyright 2020. All Rights Reserved</h6>
                    </div>
                </div>

            </div>
            </footer>
        </div>
    )
}

export {IndexPrinciPal};
