import { Link } from "wouter";

export default function Footer() {
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
    <footer id="contactos" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <img src="/logo.jpg" alt="Private Classes Logo" className="h-12 mx-auto mb-8" />
            <p className="text-gray-400 mb-10">
              Ofrecemos tutorías personalizadas para todos los niveles educativos, 
              adaptadas a las necesidades específicas de cada estudiante.
            </p>
            <div className="flex space-x-4 items-center justify-center mb-4">
              <a 
                href="https://www.facebook.com/CentrodeCapacitacionQuito/" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://wa.me/593984137360" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicios")} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("comentarios")} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Comentarios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("informacion")} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Información
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("nosotros")} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Acerca de Nosotros
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto directo</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary-500 mt-1 mr-3"></i>
                <span className="text-gray-400">0984137360</span>
              </li>
              <li className="flex items-start">
                <i className="fab fa-whatsapp text-primary-500 mt-1 mr-3"></i>
                <a href="https://wa.me/593984137360?text=Me%20puedes%20ayudar%20con%20más%20información%20de%20sus%20clases%20presenciales%2C%20onlines%20y%20sus%20precios%3F
" className="text-gray-400 hover:text-white transition-colors duration-300">
                  WhatsApp directo
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary-500 mt-1 mr-3"></i>
                <a href="mailto:info@privateclasses.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@privateclasses.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-500 mt-1 mr-3"></i>
                <span className="text-gray-400">Quito Norte</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Horario de atención</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Lunes a Viernes: 9:00 - 20:00</li>
              <li>Sábados: 10:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Private Classes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
