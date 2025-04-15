export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative text-white py-16 md:py-24"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/fondo.png')` }}
      ></div>

      {/* Capa para oscurecer un poco más si lo deseas */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Contenido encima */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tutorías personalizadas para tu éxito académico
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              En Private Classes te ofrecemos apoyo educativo especializado para todos los niveles académicos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/593984137360?text=%C2%BFQue%20Tutor%C3%ADas%20personalizadas%20tienen%20disponibles%3F%2C%20Me%20pueden%20ayudar%20con%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20clases%20en%20l%C3%ADnea%2C%20su%20asesor%C3%ADa%20acad%C3%A9mica%2C%20preparaci%C3%B3n%20para%20ex%C3%A1menes%2C%20y%20asesor%C3%ADa%20en%20proyectos%20extracurriculares%2C%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-center"
              >
                Contactar
              </a>
              <button
                onClick={() => scrollToSection("servicios")}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Nuestros servicios
              </button>
            </div>
          </div>
          <div className="md:w-5/12">
            <img 
              src="logo.jpg" 
              alt="Estudiantes recibiendo tutoría" 
              className="rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
