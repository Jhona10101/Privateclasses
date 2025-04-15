export default function AdditionalInfoSection() {
  return (
    <section id="informacion" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Información Adicional</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre nuestra metodología y enfoque educativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/plan.png"
              alt="Metodología de enseñanza"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra metodología</h3>
            <p className="text-gray-600 mb-6">
              En Private Classes creemos en un enfoque personalizado que se adapta a cada estudiante. 
              Nuestro método se basa en tres pilares fundamentales:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Diagnóstico inicial</h4>
                  <p className="text-gray-600">
                    Evaluamos el punto de partida, estilo de aprendizaje y objetivos específicos de cada estudiante.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Plan personalizado</h4>
                  <p className="text-gray-600">
                    Diseñamos un programa a medida que aborda las necesidades específicas identificadas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Seguimiento continuo</h4>
                  <p className="text-gray-600">
                    Monitoreamos constantemente el progreso y ajustamos las estrategias según sea necesario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
