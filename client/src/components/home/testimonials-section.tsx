const testimonials = [
  {
    text: "Gracias a las tutorías personalizadas de matemáticas, pude mejorar significativamente mis calificaciones. Mi tutor supo explicar conceptos complejos de forma clara y adaptada a mi forma de aprender.",
    name: "Carlos Rodríguez",
    role: "Estudiante de Ingeniería",
    color: "primary",
    stars: 5
  },
  {
    text: "Las clases online fueron perfectas para mi horario complicado. Pude recibir tutorías de alta calidad sin tener que desplazarme, y la plataforma digital que utilizan es muy fácil de usar.",
    name: "Laura Martínez",
    role: "Estudiante de Medicina",
    color: "secondary",
    stars: 5
  },
  {
    text: "Mi hijo ha experimentado un cambio notable desde que comenzó con las tutorías. No solo han mejorado sus notas, sino también su confianza y motivación hacia el estudio.",
    name: "Ana García",
    role: "Madre de estudiante",
    color: "primary",
    stars: 4.5
  }
];

export default function TestimonialsSection() {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section
      id="comentarios"
      className="relative text-white py-16 md:py-24"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/blog.png')` }}
      ></div>

      {/* Capa para oscurecer un poco más si lo deseas */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Contenido encima */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre las experiencias de quienes ya han mejorado su rendimiento académico con nuestras tutorías.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-${testimonial.color}-500`}></div>
              <div className="text-yellow-400 flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <i className="fas fa-user"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
