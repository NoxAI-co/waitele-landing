export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </div>

      {/* Header elegante */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
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
              <a href="/" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800/50">
                Inicio
              </a>
              <a href="/planes" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-blue-500/10">
                Planes
              </a>
              <a href="/sobre-nosotros" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800/50">
                Sobre Nosotros
              </a>
              <a href="/contacto" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800/50">
                Contacto
              </a>
              <a href="/pqrs" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800/50">
                PQRS
              </a>
              <a href="/normativas" className="text-gray-300 hover:text-blue-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-800/50">
                Normativas
              </a>
              <div className="h-4 w-px bg-gray-600"></div>
              <a href="/contacto" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Contáctanos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-20 relative z-10">
        {/* Hero elegante */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fibra Óptica de Alta Velocidad
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                Planes de Conexión
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Velocidades simétricas, tecnología de punta y la mejor experiencia de conectividad para transformar tu mundo digital.
            </p>
          </div>
        </section>

        {/* Planes elegantes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Plan Básico */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group hover:bg-gray-800/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2 uppercase tracking-wider">Básico</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-light text-white">$50.000</span>
                    <span className="text-gray-500 text-lg font-light">/mes</span>
                  </div>
                  <div className="mb-8 pb-6 border-b border-gray-700/50">
                    <div className="text-4xl font-light text-white mb-1">50</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Mbps simétricos</div>
                  </div>
                  <ul className="space-y-4 mb-10 text-left">
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fibra óptica dedicada
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Instalación incluida
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte técnico
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin permanencia
                    </li>
                  </ul>
                  <button className="w-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 border border-white/10 hover:border-white/20">
                    Contratar Plan
                  </button>
                </div>
              </div>

              {/* Plan Intermedio - Destacado */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 relative transform scale-105 shadow-2xl shadow-black/20">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Más Popular
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2 uppercase tracking-wider">Intermedio</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-light text-white">$70.000</span>
                    <span className="text-gray-400 text-lg font-light">/mes</span>
                  </div>
                  <div className="mb-8 pb-6 border-b border-white/20">
                    <div className="text-4xl font-light text-white mb-1">100</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Mbps simétricos</div>
                  </div>
                  <ul className="space-y-4 mb-10 text-left">
                    <li className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fibra óptica dedicada
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Instalación incluida
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte prioritario
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin permanencia
                    </li>
                  </ul>
                  <button className="w-full bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-100">
                    Contratar Plan
                  </button>
                </div>
              </div>

              {/* Plan Avanzado */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group hover:bg-gray-800/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2 uppercase tracking-wider">Avanzado</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-light text-white">$90.000</span>
                    <span className="text-gray-500 text-lg font-light">/mes</span>
                  </div>
                  <div className="mb-8 pb-6 border-b border-gray-700/50">
                    <div className="text-4xl font-light text-white mb-1">200</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Mbps simétricos</div>
                  </div>
                  <ul className="space-y-4 mb-10 text-left">
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fibra óptica dedicada
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Instalación incluida
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte VIP
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin permanencia
                    </li>
                  </ul>
                  <button className="w-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 border border-white/10 hover:border-white/20">
                    Contratar Plan
                  </button>
                </div>
              </div>

              {/* Plan Premium */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group hover:bg-gray-800/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2 uppercase tracking-wider">Premium</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-light text-white">$110.000</span>
                    <span className="text-gray-500 text-lg font-light">/mes</span>
                  </div>
                  <div className="mb-8 pb-6 border-b border-gray-700/50">
                    <div className="text-4xl font-light text-white mb-1">300</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Mbps simétricos</div>
                  </div>
                  <ul className="space-y-4 mb-10 text-left">
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fibra óptica dedicada
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Instalación incluida
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte 24/7 Premium
                    </li>
                    <li className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin permanencia
                    </li>
                  </ul>
                  <button className="w-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 border border-white/10 hover:border-white/20">
                    Contratar Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparación elegante */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Compara <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Características</span>
              </h2>
              <p className="text-xl text-gray-400">
                Encuentra el plan perfecto para tus necesidades digitales
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Características</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Básico</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-400 bg-blue-500/10">Intermedio</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Avanzado</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-white">Velocidad</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">50 Mbps</td>
                      <td className="px-6 py-4 text-sm text-blue-400 text-center bg-blue-500/10 font-semibold">100 Mbps</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">200 Mbps</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">300 Mbps</td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-white">Precio mensual</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">$50,000</td>
                      <td className="px-6 py-4 text-sm text-blue-400 text-center bg-blue-500/10 font-semibold">$70,000</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">$90,000</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">$110,000</td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-white">Fibra óptica</td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center bg-blue-500/10"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-white">Instalación</td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center bg-blue-500/10"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                      <td className="px-6 py-4 text-center"><span className="text-green-400">✓</span></td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-white">Soporte técnico</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">Estándar</td>
                      <td className="px-6 py-4 text-sm text-blue-400 text-center bg-blue-500/10 font-semibold">Prioritario</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">VIP</td>
                      <td className="px-6 py-4 text-sm text-gray-300 text-center">24/7 Premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-12 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para conectarte al futuro?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Únete a más de 500 familias que ya disfrutan de la mejor conectividad en Buenaventura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contacto" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Solicitar Información
                </a>
                <a href="https://wa.me/573142876981?text=Hola,%20quiero%20información%20sobre%20los%20planes%20de%20WAITELE" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/573142876981?text=Hola,%20estoy%20interesado%20en%20los%20planes%20de%20fibra%20óptica%20de%20WAITELE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 shadow-green-500/25"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 