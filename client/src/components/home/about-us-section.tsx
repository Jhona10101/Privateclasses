export default function AboutUsSection() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Acerca de Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Private Classes nació de la pasión por la educación y el deseo de ayudar a los estudiantes a alcanzar su máximo potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra historia</h3>
            <p className="text-gray-600 mb-6">
              Fundada por un grupo de educadores con experiencia en diversos campos académicos, 
              Private Classes surgió como respuesta a la necesidad de un apoyo educativo más personalizado 
              y adaptado a las necesidades individuales de cada estudiante.
            </p>
            
            <p className="text-gray-600 mb-6">
              Desde nuestros inicios, nos hemos comprometido con la excelencia académica y el desarrollo 
              integral de nuestros alumnos, estableciendo relaciones de confianza basadas en resultados tangibles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Misión</h4>
                  <p className="text-gray-600">
                    Facilitar el éxito académico de nuestros estudiantes mediante tutorías personalizadas 
                    que potencien sus capacidades individuales.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Visión</h4>
                  <p className="text-gray-600">
                    Ser reconocidos como el referente en apoyo educativo personalizado, innovando constantemente 
                    en metodologías que se adapten a las necesidades cambiantes de los estudiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/libros.png" 
              alt="Nuestro equipo" 
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
