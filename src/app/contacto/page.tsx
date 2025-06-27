export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header oscuro */}
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
              <a href="/contacto" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-gray-800">
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

      {/* Hero Section Minimalista */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hablemos
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="bg-gray-800">
        {/* Formulario de Contacto - PRIMERO */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Formulario de Contacto */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900/50 rounded-3xl p-10 lg:p-16 border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Completa el formulario y nos pondremos en contacto contigo pronto.</p>
                  </div>

                                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                          Nombre completo
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg hover:border-gray-500/50 focus:bg-gray-800/80"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                          Correo electrónico
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg hover:border-gray-500/50 focus:bg-gray-800/80"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                        Teléfono
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg hover:border-gray-500/50 focus:bg-gray-800/80"
                        placeholder="314 287 6981"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                        Asunto
                      </label>
                      <select className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white text-lg hover:border-gray-500/50 focus:bg-gray-800/80">
                        <option value="">Selecciona un asunto</option>
                        <option value="planes">Consulta sobre planes de internet</option>
                        <option value="instalacion">Solicitud de instalación</option>
                        <option value="soporte">Soporte técnico</option>
                        <option value="otros">Otros</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                        Mensaje
                      </label>
                      <textarea 
                        rows={6} 
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400 text-lg resize-none hover:border-gray-500/50 focus:bg-gray-800/80"
                        placeholder="Describe tu consulta o solicitud..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" 
                        className="group relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 text-lg"
                      >
                        <span className="relative z-10">Enviar mensaje</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            {/* Información de Contacto - DESPUÉS DEL FORMULARIO */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
              
              {/* Email */}
              <div className="bg-gray-900/50 rounded-2xl p-10 border border-gray-700/50 hover:border-blue-500/30 transition-colors min-h-[220px] flex flex-col">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400 mb-4 flex-1">Envíanos un correo electrónico</p>
                <div className="mt-auto">
                  <a href="mailto:ana.trabajeconnosotros.2024@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm block whitespace-nowrap overflow-hidden text-ellipsis">
                    ana.trabajeconnosotros.2024@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="bg-gray-900/50 rounded-2xl p-10 border border-gray-700/50 hover:border-green-500/30 transition-colors min-h-[220px] flex flex-col">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
                <p className="text-gray-400 mb-4 flex-1">Llámanos directamente</p>
                <div className="mt-auto">
                  <a href="tel:+573142876981" className="text-green-400 hover:text-green-300 transition-colors text-lg font-medium">
                    314 287 6981
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gray-900/50 rounded-2xl p-10 border border-gray-700/50 hover:border-green-500/30 transition-colors min-h-[220px] flex flex-col">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-400 mb-4 flex-1">Chatea con nosotros 24/7</p>
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/573142876981?text=Hola,%20quiero%20conocer%20más%20sobre%20WAITELE%20COMUNICACIONES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section className="py-20 border-t border-gray-700/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra ubicación</h2>
              <p className="text-gray-400">Nos encontramos en el corazón de Buenaventura</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 inline-block">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">Buenaventura</h3>
                  <p className="text-gray-400">Valle del Cauca, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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