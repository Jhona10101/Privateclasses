const educationApproaches = [
  {
    icon: "fas fa-brain",
    color: "primary",
    title: "Aprendizaje activo",
    description: "Fomentamos la participación activa del estudiante en su proceso de aprendizaje, promoviendo la comprensión profunda en lugar de la memorización."
  },
  {
    icon: "fas fa-puzzle-piece",
    color: "secondary",
    title: "Adaptabilidad",
    description: "Adaptamos nuestros métodos de enseñanza al estilo de aprendizaje individual de cada estudiante, maximizando la efectividad de cada sesión."
  },
  {
    icon: "fas fa-trophy",
    color: "primary",
    title: "Orientación a resultados",
    description: "Establecemos metas claras y medibles, con un enfoque pragmático que busca la mejora tangible del rendimiento académico."
  },
  {
    icon: "fas fa-lightbulb",
    color: "secondary",
    title: "Pensamiento crítico",
    description: "Desarrollamos la capacidad de análisis y razonamiento independiente, preparando a los estudiantes para enfrentar desafíos académicos futuros."
  },
  {
    icon: "fas fa-book-reader",
    color: "primary",
    title: "Aprendizaje continuo",
    description: "Inculcamos el valor del aprendizaje a lo largo de la vida, fomentando la curiosidad intelectual y el deseo de saber más."
  },
  {
    icon: "fas fa-users",
    color: "secondary",
    title: "Comunicación efectiva",
    description: "Mejoramos las habilidades de comunicación académica, tanto escrita como oral, fundamentales para el éxito en cualquier área de estudio."
  }
];

export default function EducationSection() {
  return (
    <section
      id="educacion"
      className="relative text-white py-16 md:py-24"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/libros.png')` }}
      ></div>

      {/* Capa para oscurecer un poco más si lo deseas */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Contenido encima */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nuestro enfoque educativo
          </h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            Descubre cómo ayudamos a nuestros estudiantes a alcanzar su máximo potencial académico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationApproaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-gray-400 rounded-xl p-8 shadow-sm border border-gray-200"
            >
              <div className={`bg-${approach.color}-100 text-${approach.color}-600 rounded-full h-16 w-70 flex items-center justify-center mb-4`}>
                <i className={`${approach.icon} text-5xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{approach.title}</h3>
              <p className="text-gray-700">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
