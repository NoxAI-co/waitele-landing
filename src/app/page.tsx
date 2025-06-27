export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Elegante Oscuro */}
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
              <span className="text-xl font-semibold text-white">WAITELE</span>
            </div>
            
            {/* Navegación Elegante */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-gray-800">
                Inicio
              </a>
              <a href="/planes" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Planes
              </a>
              <a href="/sobre-nosotros" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
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

            {/* Menú móvil */}
            <button className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section Elegante */}
      <section className="pt-48 pb-32 min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fibra óptica de nueva generación
              </span>
            </div>
            
            <h1 className="animated-gradient-text text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
              Conectividad Sin Límites
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Internet de fibra óptica de alta velocidad y soluciones de telecomunicaciones confiables. 
              Únete a la revolución digital con WAITELE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/planes"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 group"
              >
                Ver Planes
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-blue-500 hover:text-blue-400 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas Elegantes */}
      <section className="py-20 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Hogares conectados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">300</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Mbps simétricos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Tiempo de actividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Indicadores de Calidad */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Certificaciones y Respaldos
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Avalados por las Principales
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Instituciones del País
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Operamos bajo la supervisión y certificación de las entidades reguladoras más importantes de Colombia
            </p>
          </div>

          {/* Carrusel infinito */}
          <div className="relative overflow-hidden">
            {/* Gradientes de desvanecimiento */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Contenedor del carrusel */}
            <div className="flex animate-scroll space-x-16">
              {/* Primera serie de logos */}
              <div className="flex space-x-16 min-w-max">
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/MinTIC.png"
                    alt="Ministerio de Tecnologías de la Información y las Comunicaciones"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Comision_de_Regulacion_de_Comunicaciones.png"
                    alt="Comisión de Regulación de Comunicaciones"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/policia_nacional.png"
                    alt="Policía Nacional de Colombia"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Bienestar_familiar.png"
                    alt="Instituto Colombiano de Bienestar Familiar"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Fiscalia_General_de_la_Nacion.png"
                    alt="Fiscalía General de la Nación"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Internet_sano.png"
                    alt="Internet Sano - Protección de Menores"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/vive_para_la_gente.png"
                    alt="Vive para la Gente - Gobierno Nacional"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Todos_por_un_nuevo_pais.png"
                    alt="Todos por un Nuevo País - Gobierno Nacional"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Segunda serie (duplicada para efecto infinito) */}
              <div className="flex space-x-16 min-w-max">
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/MinTIC.png"
                    alt="Ministerio de Tecnologías de la Información y las Comunicaciones"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Comision_de_Regulacion_de_Comunicaciones.png"
                    alt="Comisión de Regulación de Comunicaciones"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/policia_nacional.png"
                    alt="Policía Nacional de Colombia"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Bienestar_familiar.png"
                    alt="Instituto Colombiano de Bienestar Familiar"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Fiscalia_General_de_la_Nacion.png"
                    alt="Fiscalía General de la Nación"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Internet_sano.png"
                    alt="Internet Sano - Protección de Menores"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/vive_para_la_gente.png"
                    alt="Vive para la Gente - Gobierno Nacional"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-24 w-40 transition-all duration-300 hover:scale-110 group">
                  <img
                    src="/indicadores-calidad/Todos_por_un_nuevo_pais.png"
                    alt="Todos por un Nuevo País - Gobierno Nacional"
                    className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Por qué elegir WAITELE?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              La mejor experiencia de conectividad con tecnología de vanguardia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Velocidades Simétricas</h3>
              <p className="text-gray-400 leading-relaxed">
                Fibra óptica simétrica hasta 300 Mbps. Ideal para trabajo remoto, 
                streaming 4K, gaming y múltiples dispositivos conectados.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Soporte 24/7</h3>
              <p className="text-gray-400 leading-relaxed">
                Asistencia técnica especializada disponible cuando la necesites. 
                Resolvemos tus consultas de manera rápida y eficiente.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sin Permanencia</h3>
              <p className="text-gray-400 leading-relaxed">
                Planes transparentes sin costos ocultos ni permanencias. 
                Cambia o cancela cuando quieras, sin penalizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Destacados */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Planes que se adaptan a ti
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Encuentra el plan perfecto para tu hogar o empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Plan Básico</h3>
                <p className="text-gray-400 mb-4">Ideal para uso personal</p>
                <div className="text-3xl font-bold text-blue-400">$50K</div>
                <div className="text-gray-500 text-sm">por mes</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100 Mbps simétricos
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instalación gratuita
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte técnico
                </li>
              </ul>
              <a href="/planes" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block">
                Ver detalles
              </a>
            </div>

            {/* Plan Premium - Destacado */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Plan Premium</h3>
                <p className="text-gray-400 mb-4">Perfecto para familias</p>
                <div className="text-3xl font-bold text-blue-400">$90K</div>
                <div className="text-gray-500 text-sm">por mes</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  200 Mbps simétricos
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Router WiFi 6 incluido
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte prioritario
                </li>
              </ul>
              <a href="/planes" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block">
                Contratar ahora
              </a>
            </div>

            {/* Plan Empresarial */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Plan Empresarial</h3>
                <p className="text-gray-400 mb-4">Para tu negocio</p>
                <div className="text-3xl font-bold text-green-400">$110K</div>
                <div className="text-gray-500 text-sm">por mes</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  300 Mbps simétricos
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  IP estática incluida
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soporte empresarial
                </li>
              </ul>
              <a href="/planes" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block">
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gray-900/50 rounded-3xl p-12 lg:p-16 border border-gray-700/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para la mejor conexión?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Únete a cientos de familias que ya disfrutan de internet de fibra óptica con WAITELE
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/planes" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
              >
                Ver Planes
              </a>
              <a 
                href="/contacto" 
                className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Contactar
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
          href="https://wa.me/573142876981?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20fibra%20óptica%20de%20WAITELE"
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

