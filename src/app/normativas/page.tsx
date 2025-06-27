export default function NormativasPage() {
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
              <a href="/sobre-nosotros" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Sobre Nosotros
              </a>
              <a href="/contacto" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                Contacto
              </a>
              <a href="/pqrs" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800">
                PQRS
              </a>
              <a href="/normativas" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-gray-800">
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

      {/* Hero Section Normativas */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Regulado por MinTIC
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Marco Legal y
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Regulaciones
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            WAITELE COMUNICACIONES S.A.S está <strong className="text-blue-400">regulada por el Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC)</strong> y opera bajo los más altos estándares de cumplimiento normativo del sector de telecomunicaciones en Colombia.
          </p>
        </div>
      </section>

      {/* Marco Legal y Documentos Normativos */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Marco Legal y Documentos Normativos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Accede directamente a la documentación que respalda nuestro cumplimiento normativo
            </p>
          </div>

          {/* Resoluciones CRC */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Resoluciones CRC</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5337-2018-atencion-usuario.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5337/2018</h4>
                    <p className="text-blue-400 text-xs">Atención al Usuario</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Régimen de atención y servicio al usuario</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5299-2018-calidad-servicio.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5299/2018</h4>
                    <p className="text-green-400 text-xs">Calidad del Servicio</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Condiciones de calidad para servicios</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5321-2018-normatividad-tecnica.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-colors">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5321/2018</h4>
                    <p className="text-purple-400 text-xs">Normatividad Técnica</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Especificaciones técnicas para servicios</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5300-2018-medicion-calidad.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-yellow-500/20 transition-colors">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5300/2018</h4>
                    <p className="text-yellow-400 text-xs">Medición de Calidad</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Metodologías de medición de calidad</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5322-2018-publicidad.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-pink-500/20 transition-colors">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5322/2018</h4>
                    <p className="text-pink-400 text-xs">Publicidad</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Régimen de publicidad para servicios</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-4776-2015-condiciones-calidad.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 transition-colors">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 4776/2015</h4>
                    <p className="text-indigo-400 text-xs">Condiciones de Calidad</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Condiciones de calidad para acceso a internet</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5344-2018-regulaciones-adicionales.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5344/2018</h4>
                    <p className="text-cyan-400 text-xs">Regulaciones Adicionales</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Regulaciones adicionales para el sector</p>
              </a>

              <a 
                href="/documentos-normativos/resoluciones-crc/resolucion-crc-5397-2018-regulaciones-complementarias.pdf" 
                target="_blank"
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mr-3 group-hover:bg-teal-500/20 transition-colors">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">CRC 5397/2018</h4>
                    <p className="text-teal-400 text-xs">Regulaciones Complementarias</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Regulaciones complementarias del sector</p>
              </a>
            </div>
          </div>

          {/* Leyes y Políticas */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Leyes */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Leyes</h3>
              <div className="space-y-6">
                <a 
                  href="/documentos-normativos/leyes/ley-679-2001-prevencion-explotacion-infantil.pdf" 
                  target="_blank"
                  className="block bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-red-500/20 transition-colors">
                      <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">Ley 679 de 2001</h4>
                      <p className="text-red-400 text-sm">Prevención Explotación Infantil</p>
                      <p className="text-gray-400 text-sm mt-2">Protección contra explotación y abuso sexual infantil en internet</p>
                    </div>
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                <a 
                  href="/documentos-normativos/leyes/ley-1480-2011-estatuto-consumidor.pdf" 
                  target="_blank"
                  className="block bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">Ley 1480 de 2011</h4>
                      <p className="text-blue-400 text-sm">Estatuto del Consumidor</p>
                      <p className="text-gray-400 text-sm mt-2">Protección de derechos de consumidores y usuarios</p>
                    </div>
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Políticas de Protección */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Políticas de Protección</h3>
              <div className="space-y-6">
                <a 
                  href="/documentos-normativos/politicas-proteccion/politica-proteccion-datos-personales.pdf" 
                  target="_blank"
                  className="block bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">Política de Protección</h4>
                      <p className="text-green-400 text-sm">Datos Personales</p>
                      <p className="text-gray-400 text-sm mt-2">Tratamiento y protección de información personal según Ley 1581/2012</p>
                    </div>
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Nota sobre MinTIC */}
          <div className="mt-16 text-center">
            <div className="bg-blue-500/10 rounded-3xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empresa Regulada por MinTIC</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                WAITELE COMUNICACIONES S.A.S opera bajo la supervisión del <strong className="text-blue-400">Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC)</strong>, 
                cumpliendo con todos los estándares nacionales de calidad, seguridad y protección al usuario establecidos para el sector de telecomunicaciones en Colombia.
              </p>
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
          href="https://wa.me/573142876981?text=Hola,%20necesito%20información%20sobre%20sus%20servicios"
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