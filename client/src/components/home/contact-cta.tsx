export default function ContactCTA() {
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
    <section
      id="inicio"
      className="relative text-white py-16 md:py-24"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/biblio.png')` }}
      ></div>

      {/* Capa para oscurecer un poco más si lo deseas */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Contenido encima */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para mejorar tu rendimiento académico?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Contáctanos hoy mismo y descubre cómo nuestras tutorías personalizadas 
          pueden ayudarte a alcanzar tus metas educativas.
        </p>
        <a
          href="https://wa.me/593984137360?text=Que%20Tutor%C3%ADas%20personalizadas%20tienen%20disponibles%3F%2C%20Me%20pueden%20ayudar%20con%20m%C3%A1s%20informaci%C3%B3n%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94%F0%9F%A4%94"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 text-white hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 inline-block"
        >
          Solicitar información
        </a>
      </div>
    </section>
  );
}
