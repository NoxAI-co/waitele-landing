export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Elegante */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo WiFi Animado */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-end justify-center space-x-1 p-1">
                <div className="wifi-bar-1 w-1 h-2 bg-blue-400 rounded-full"></div>
                <div className="wifi-bar-2 w-1 h-3 bg-blue-400 rounded-full"></div>
                <div className="wifi-bar-3 w-1 h-4 bg-blue-400 rounded-full"></div>
                <div className="wifi-bar-4 w-1 h-5 bg-blue-400 rounded-full"></div>
              </div>
              <a href="/" className="text-xl font-semibold text-white">WAITELE</a>
            </div>
            
            {/* Navegación */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Inicio
              </a>
              <a href="/planes" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Planes
              </a>
              <a href="/sobre-nosotros" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-gray-800">
                Sobre Nosotros
              </a>
              <a href="/contacto" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Contacto
              </a>
              <a href="/pqrs" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                PQRS
              </a>
              <a href="/normativas" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Normativas
              </a>
              <div className="h-4 w-px bg-gray-600"></div>
              <a href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Contáctanos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section Elegante */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h4m6 0V9" />
              </svg>
              Nuestra empresa
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight overflow-visible">
            Conectando el
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent pb-2">
              Futuro Digital
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            WAITELE COMUNICACIONES S.A.S es un proveedor líder de servicios de internet especializado en soluciones de conectividad simétrica por fibra óptica. Transformamos la manera en que hogares y empresas se conectan con el mundo digital.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nuestra Filosofía
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Los pilares que definen quiénes somos y hacia dónde vamos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="group">
              <div className="bg-gray-900/50 rounded-3xl p-10 lg:p-12 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Misión</h3>
                  <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                    Brindar servicios de internet de alta calidad, con velocidades simétricas, estabilidad y atención oportuna, impulsando la transformación digital de hogares y empresas mediante soluciones tecnológicas confiables, accesibles y reguladas.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="group">
              <div className="bg-gray-900/50 rounded-3xl p-10 lg:p-12 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Visión</h3>
                  <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                    Ser líderes en conectividad simétrica por fibra óptica en Colombia, reconocidos por nuestra innovación, atención al cliente y compromiso con la calidad y la regulación, aportando al desarrollo digital del país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Los principios fundamentales que guían cada una de nuestras decisiones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calidad */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Calidad</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprometidos con la excelencia en cada servicio, utilizando tecnología de vanguardia para garantizar la mejor experiencia.
              </p>
            </div>

            {/* Confiabilidad */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Confiabilidad</h3>
              <p className="text-gray-400 leading-relaxed">
                Servicios estables y seguros en los que nuestros clientes pueden confiar para sus necesidades de conectividad.
              </p>
            </div>

            {/* Innovación */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovación</h3>
              <p className="text-gray-400 leading-relaxed">
                Implementamos continuamente nuevas tecnologías para mantenernos a la vanguardia del sector.
              </p>
            </div>

            {/* Atención al Cliente */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Atención al Cliente</h3>
              <p className="text-gray-400 leading-relaxed">
                Priorizamos la satisfacción del cliente con soporte técnico especializado disponible 24/7.
              </p>
            </div>

            {/* Transparencia */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transparencia</h3>
              <p className="text-gray-400 leading-relaxed">
                Comunicación clara y honesta con nuestros clientes, sin costos ocultos ni permanencias.
              </p>
            </div>

            {/* Compromiso Social */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compromiso Social</h3>
              <p className="text-gray-400 leading-relaxed">
                Contribuimos al desarrollo digital del país, conectando comunidades y facilitando el acceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas de Impacto */}
      <section className="py-24 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cifras que demuestran nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-3">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Hogares conectados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-3">300</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Mbps máximos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-3">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-3">99%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Tiempo de actividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gray-800/50 rounded-3xl p-12 border border-gray-700/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Únete a nuestra familia digital
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos transformar tu experiencia de conectividad con la mejor fibra óptica de la región
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/planes"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Ver Nuestros Planes
              </a>
              <a 
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-green-500 hover:text-green-400 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Elegante */}
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 lg:mb-0">
              <div className="w-6 h-6 flex items-end justify-center space-x-1">
                <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-5 bg-blue-400 rounded-full"></div>
              </div>
              <span className="font-semibold text-white">WAITELE COMUNICACIONES S.A.S</span>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Buenaventura, Valle del Cauca
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 WAITELE COMUNICACIONES S.A.S • Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/573142876981?text=Hola,%20quiero%20conocer%20más%20sobre%20WAITELE%20COMUNICACIONES"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 