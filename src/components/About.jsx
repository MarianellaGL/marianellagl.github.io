import marianella from '../marianella.jpeg';

const About = () => {
  return (
    <div className="animate animate-fade-in">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4" style={{ animationDuration: '1s' }}>
          Acerca de mí
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img className="w-60 rounded-lg shadow-lg max-w-1/2" src={marianella} alt="Marianella" />
          </div>
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Soy una software developer con 3+ años de experiencia en JavaScript, MERN stack. Manejo bases de datos
              relacionales y no relacionales, microfrontends y microservicios.
            </p>
            <p className="mb-4">
              Me considero una persona que se encuentra en aprendizaje constante y apasionada por el descubrimiento de
              nuevas tecnologías. No me quedo en mi zona de confort y siempre busco la mejora continua.
            </p>
            <p className="mb-4">
              Soy mentora en MET(Mujeres en Tecnología) una asociación que se encarga de acercar a las mujeres a la
              tecnología.
            </p>
            <p>¡Sí querés conocer más de mi mundo te invito a revisar mi portfolio completo!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;