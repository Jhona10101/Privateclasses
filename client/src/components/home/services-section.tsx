import { Link } from "wouter";

const services = [
  {
    icon: "fas fa-user-graduate",
    color: "primary",
    title: "Tutorías personalizadas",
    description: "Sesiones one-to-one adaptadas al ritmo de aprendizaje y necesidades específicas de cada estudiante."
  },
  {
    icon: "fas fa-laptop",
    color: "secondary",
    title: "Clases en línea",
    description: "Tutorías virtuales que te permiten aprender desde cualquier lugar con la misma calidad que las presenciales."
  },
  {
    icon: "fas fa-book",
    color: "primary",
    title: "Asesoría académica",
    description: "Apoyo en trabajos, proyectos y tareas con un enfoque metodológico que fortalece el aprendizaje."
  },
  {
    icon: "fas fa-users",
    color: "secondary",
    title: "Grupos de estudio",
    description: "Sesiones colaborativas en grupos reducidos que fomentan el aprendizaje entre pares con guía especializada."
  },
  {
    icon: "fas fa-chart-line",
    color: "primary",
    title: "Preparación para exámenes",
    description: "Entrenamiento específico para pruebas importantes, con estrategias para maximizar resultados."
  },
  {
    icon: "fas fa-project-diagram",
    color: "secondary",
    title: "Proyectos extracurriculares",
    description: "Asesoría en iniciativas educativas fuera del plan de estudios para potenciar habilidades adicionales."
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contactos");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros servicios educativos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos diversas modalidades de tutorías adaptadas a tus necesidades, horarios y preferencias de aprendizaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className={`text-${service.color}-600 rounded-full h-16 w-50 flex items-center justify-center mb-4`}>
                <i className={`${service.icon} text-5xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-00 mb-4">{service.description}</p>
              <a
                href="https://wa.me/593984137360?text=%C2%BFQue%20Tutor%C3%ADas%20personalizadas%20tienen%20disponibles%3F%2C%20Me%20pueden%20ayudar%20con%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20clases%20en%20l%C3%ADnea%2C%20su%20asesor%C3%ADa%20acad%C3%A9mica%2C%20preparaci%C3%B3n%20para%20ex%C3%A1menes%2C%20y%20asesor%C3%ADa%20en%20proyectos%20extracurriculares%2C%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${service.color}-600 hover:text-${service.color}-800 font-medium inline-flex items-center`}
              >
                Solicitar información
                <svg className="w-4 h-4 ml-1" fill="none">{/* ícono aquí */}</svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
