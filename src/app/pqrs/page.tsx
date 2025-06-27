export default function PQRSPage() {
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
              <a href="/pqrs" className="text-blue-400 font-medium px-3 py-2 rounded-md bg-gray-800">
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

      {/* Hero Section PQRS */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Atención al cliente
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Peticiones, Quejas,
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Reclamos y Sugerencias
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tu opinión es fundamental para nosotros. Te escuchamos y respondemos con la atención que mereces, 
            garantizando tiempos de respuesta rápidos y soluciones efectivas.
          </p>
        </div>
      </section>

      {/* Formulario PQRS - PRIMERO */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Formulario PQRS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Completa el siguiente formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-10 lg:p-12 border border-gray-700/50 backdrop-blur-sm">
            <form className="space-y-8">
              {/* Tipo de solicitud */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Tipo de Solicitud *
                </label>
                <select className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg">
                  <option value="">Selecciona el tipo de solicitud</option>
                  <option value="peticion">Petición</option>
                  <option value="queja">Queja</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </div>

              {/* Información personal */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Nombre Completo *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre completo"
                    className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Identificación *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Número de identificación"
                    className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Teléfono *
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Tu número de teléfono"
                    className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                </div>
              </div>

              {/* Dirección */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Dirección
                </label>
                <input 
                  type="text" 
                  placeholder="Tu dirección completa"
                  className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                />
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Asunto *
                </label>
                <input 
                  type="text" 
                  placeholder="Describe brevemente tu solicitud"
                  className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Descripción detallada *
                </label>
                <textarea 
                  rows={6}
                  placeholder="Describe detalladamente tu petición, queja, reclamo o sugerencia..."
                  className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                ></textarea>
              </div>

              {/* Adjuntar archivos */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Adjuntar documentos o evidencias (opcional)
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition-colors bg-gray-700/20">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-2 font-medium">Arrastra archivos aquí o haz clic para seleccionar</p>
                    <p className="text-gray-400 text-sm mb-4">Formatos permitidos: PDF, DOC, DOCX, JPG, PNG (Máximo 10MB)</p>
                    <input 
                      type="file" 
                      multiple 
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden" 
                      id="file-upload"
                    />
                    <label 
                      htmlFor="file-upload" 
                      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Seleccionar archivos
                    </label>
                  </div>
                </div>
              </div>

              {/* Preferencia de contacto */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Preferencia de contacto para la respuesta
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  <label className="flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer">
                    <input type="radio" name="contacto" value="email" className="mr-3 text-blue-500"/>
                    <span className="text-white">Email</span>
                  </label>
                  <label className="flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer">
                    <input type="radio" name="contacto" value="telefono" className="mr-3 text-blue-500"/>
                    <span className="text-white">Teléfono</span>
                  </label>
                  <label className="flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer">
                    <input type="radio" name="contacto" value="whatsapp" className="mr-3 text-blue-500"/>
                    <span className="text-white">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Términos */}
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 text-blue-500"/>
                  <span className="text-sm text-gray-300 leading-relaxed">
                    Acepto el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y autorizo a WAITELE COMUNICACIONES S.A.S 
                    para contactarme con el fin de dar respuesta a mi solicitud. Los datos serán utilizados exclusivamente para este propósito 
                    y se garantiza su confidencialidad.
                  </span>
                </label>
              </div>

              {/* Botón enviar */}
              <div className="text-center pt-6">
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 text-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contacto Directo y Tiempos - DESPUÉS DEL FORMULARIO */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Necesitas ayuda inmediata?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contáctanos directamente por múltiples canales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contacto Directo */}
            <div className="bg-gray-900/50 rounded-3xl p-10 border border-gray-700/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">Contacto Directo</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Teléfono</div>
                    <div className="text-gray-400">3142876981</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">WhatsApp 24/7</div>
                    <div className="text-gray-400">3142876981</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Email</div>
                    <div className="text-gray-400 text-sm">ana.trabajeconnosotros.2024@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://wa.me/573142876981?text=Hola,%20tengo%20una%20PQRS%20que%20presentar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            {/* Tiempos de Respuesta */}
            <div className="bg-gray-900/50 rounded-3xl p-10 border border-gray-700/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">Tiempos de Respuesta</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Peticiones</h4>
                    <div className="text-3xl font-bold text-blue-400">24h</div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Solicitudes de información, servicios o aclaraciones sobre nuestros productos</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Quejas</h4>
                    <div className="text-3xl font-bold text-orange-400">48h</div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Manifestaciones de insatisfacción por la atención recibida o prestación del servicio</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Reclamos</h4>
                    <div className="text-3xl font-bold text-red-400">72h</div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Manifestaciones por presuntos incumplimientos en la prestación del servicio</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Sugerencias</h4>
                    <div className="text-3xl font-bold text-green-400">24h</div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">Propuestas de mejora para nuestros servicios y atención al cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acuerdo RGPD - NUEVA SECCIÓN */}
      <section className="py-24 bg-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Acuerdo RGPD
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Información importante sobre el régimen de protección al usuario
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-3xl p-10 lg:p-12 border border-gray-700/50">
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                <p className="text-lg">
                  <strong className="text-white">Señor Usuario</strong>, le informamos que acorde con lo establecido en el inciso 4 Art. 42 de la <strong className="text-blue-400">Resolución 3066 de 2011 Régimen de Protección al Usuario</strong>. Cualquier Petición o Queja asociada con la facturación podrá presentarse máximo dentro de los <strong className="text-yellow-400">seis (6) meses siguientes</strong> contados a partir del vencimiento del pago oportuno de su factura.
                </p>

                <p className="text-lg">
                  <strong className="text-white">Señor usuario</strong>, dentro de los <strong className="text-blue-400">diez (10) días hábiles siguientes</strong> a la fecha que se surta la notificación de la decisión, si lo elige, usted puede presentar <strong className="text-green-400">recurso de reposición y en subsidio de apelación</strong>. Lo anterior significa que usted puede presentar nuevamente una comunicación mediante la cual manifieste su inconformidad con la presente decisión, en los casos en que la misma le sea desfavorable total o parcialmente, con el fin de que volvamos a revisar su caso particular.
                </p>

                <p className="text-lg">
                  Igualmente, si así lo quiere, en el mismo momento que presente la comunicación antes mencionada, puede expresar su interés de que su caso sea revisado y resuelto de fondo por la autoridad de vigilancia y control, es decir, la <strong className="text-blue-400">Superintendencia de Industria y Comercio —SIC-</strong>, en el evento en que la Decisión frente a su petición o queja sea confirmada o modificada y nuevamente le sea desfavorable.
                </p>

                <p className="text-lg">
                  Tenga en cuenta, que la comunicación referida, puede presentarla en forma verbal o escrita, a través de nuestras oficinas físicas de atención al usuario, a través de nuestras línea de atención al usuario para obtener información sobre el trámite impartido a su Recurso de Apelación por parte de la Superintendencia de Industria y Comercio, puede dirigirse a nuestras oficinas, o a través de la página web <strong className="text-blue-400">sic.gov.co</strong> — Email <strong className="text-blue-400">info@sic.gov.co</strong>.
                </p>

                <div className="mt-10 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <p className="text-center text-blue-400 font-semibold text-lg">
                    * WAITELE COMUNICACIONES S.A.S se compromete con la protección de sus datos personales y el cumplimiento de todas las normativas vigentes.
                  </p>
                </div>
              </div>
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
          href="https://wa.me/573142876981?text=Hola,%20tengo%20una%20PQRS%20que%20presentar"
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