import marianella from '../marianella.jpeg';
const About = () => {
    return ( <>
    <div className="container mx-auto justify-self-center">
         <h1 className='mr-[23px] ml-[118px] mb-[23px]'>Acerca de mí</h1>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
         
            <div className= 'row-span-3'>
            <img className='w-screen h-screen object-contain h-60 w-96 row-span-2' src={marianella} />
            </div>
            <p className='row-span-2 col-span-2'>

            Soy una software developer con 4+ años de experiencia en JavaScript, MERN stack. Manejo bases de datos relacionales y no relacionales, microfrontends y microservicios. 
            Me considero una persona que se encuentra en aprendizaje constante y apasionada por el descubrimiento de nuevas tecnologías. No me quedo en mi zona de confort y siempre busco la mejora continua.
           Soy mentora en MET(Mujeres en Tecnología) una asociación que se encarga de acercar a las mujeres a la tecnología. 
           ¡Sí querés conocer más de mi mundo te invito a revisar mi portfolio completo!
            </p>

        </div>
    </div>
    </> );
}
 
export default About;