# 🌐 WAITELE COMUNICACIONES S.A.S - Landing Page

<div align="center">
  <img src="public/favicon.svg" alt="WAITELE Logo" width="100" height="100">
  
  **Tu aliado en conectividad eficiente y segura**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📋 Tabla de Contenidos

- [🚀 Características](#-características)
- [💼 Sobre la Empresa](#-sobre-la-empresa)
- [📦 Servicios y Planes](#-servicios-y-planes)
- [🛠️ Instalación](#️-instalación)
- [💻 Desarrollo](#-desarrollo)
- [🚀 Despliegue](#-despliegue)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🧩 Componentes](#-componentes)
- [📱 Contacto](#-contacto)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## 🚀 Características

### ✨ **Tecnológicas**
- **⚡ Next.js 15** con App Router y Turbopack
- **⚛️ React 18** con TypeScript para type safety
- **🎨 Tailwind CSS** para diseño responsivo moderno
- **🎬 Framer Motion** para animaciones fluidas
- **📱 Responsive Design** optimizado para todos los dispositivos
- **🔍 SEO Optimizado** con metadatos completos
- **⚡ Performance** carga rápida y optimizada

### 🌟 **Funcionales**
- **📞 Integración WhatsApp** directa para contacto inmediato
- **📊 Indicadores de Calidad** con enlaces a documentos normativos
- **📋 Sistema PQRS** para atención al cliente
- **📑 Centro de Normatividad** con documentos legales
- **💰 Planes Transparentes** con precios claros
- **🏢 Información Corporativa** completa

---

## 💼 Sobre la Empresa

**WAITELE COMUNICACIONES S.A.S** es una empresa colombiana especializada en servicios de fibra óptica de alta velocidad, comprometida con brindar conectividad confiable y soporte técnico excepcional.

### 🎯 **Misión**
Ofrecer soluciones de conectividad de alta calidad enfocadas en la satisfacción del cliente, a través de un equipo humano altamente capacitado y tecnología de vanguardia.

### 👁️ **Visión**
Ser el proveedor líder de servicios de telecomunicaciones en nuestra región, reconocidos por nuestro liderazgo en tecnología, innovación y excelencia en el servicio.

### 💎 **Valores**
- **🤝 Honestidad**: Transparencia en todos nuestros procesos
- **💪 Compromiso**: Dedicación total con nuestros clientes
- **👥 Trabajo en Equipo**: Colaboración para mejores resultados
- **⚡ Eficiencia**: Optimización continua de nuestros servicios

---

## 📦 Servicios y Planes

### 🌐 **Planes de Fibra Óptica**

| Plan | Velocidad | Precio Mensual | Características |
|------|-----------|----------------|-----------------|
| **Básico** | 50/50 Mbps | $50,000 COP | Ideal para navegación básica |
| **Intermedio** ⭐ | 100/100 Mbps | $70,000 COP | **Más Popular** - Streaming HD |
| **Avanzado** | 200/200 Mbps | $90,000 COP | Gaming y trabajo remoto |
| **Premium** | 300/300 Mbps | $110,000 COP | Máximo rendimiento |

### 🔧 **Servicios Adicionales**
- **📺 Televisión HD**: $10,000/mes (2 dispositivos)
- **🛡️ Protección Antivirus**: Disponible bajo consulta
- **🔧 Instalación**: $90,000 único (o 12 cuotas de $10,000)

---

## 🛠️ Instalación

### 📋 **Prerrequisitos**
- **Node.js** 18.0.0 o superior
- **Yarn** 1.22.0 o superior
- **Git** para control de versiones

### ⚡ **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/waitele-landing.git

# 2. Navegar al directorio
cd waitele-landing

# 3. Instalar dependencias
yarn install

# 4. Iniciar desarrollo
yarn dev
```

### 🔧 **Instalación Detallada**

```bash
# Verificar versiones de Node.js y Yarn
node --version  # Debe ser >= 18.0.0
yarn --version  # Debe ser >= 1.22.0

# Instalar dependencias de desarrollo
yarn install --frozen-lockfile

# Verificar instalación
yarn type-check
yarn lint
```

---

## 💻 Desarrollo

### 🚀 **Scripts Disponibles**

```bash
# 🔧 Desarrollo
yarn dev                    # Servidor de desarrollo con Turbopack
yarn type-check            # Verificación de tipos TypeScript
yarn lint                  # Análisis de código con ESLint
yarn lint:fix              # Corrección automática de ESLint

# 🏗️ Construcción
yarn build                 # Construir para producción
yarn start                 # Iniciar servidor de producción
yarn preview               # Construir y previsualizar

# 🧹 Mantenimiento
yarn clean                 # Limpiar archivos de cache
```

### 🌍 **URLs de Desarrollo**
- **Desarrollo**: http://localhost:3000
- **Análisis de Bundle**: Disponible tras `yarn build`

---

## 🚀 Despliegue

### ☁️ **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### 🐳 **Docker**
```bash
# Construir imagen
docker build -t waitele-landing .

# Ejecutar contenedor
docker run -p 3000:3000 waitele-landing
```

### 🔧 **Servidor Tradicional**
```bash
# Construir para producción
yarn build

# Iniciar servidor
yarn start
```

---

## 📁 Estructura del Proyecto

```
waitele-landing/
├── 📂 public/                      # Archivos estáticos
│   ├── 📄 favicon.svg             # Favicon personalizado
│   ├── 📂 documentos-normativos/   # Documentos legales
│   └── 📂 indicadores-calidad/     # Imágenes de indicadores
├── 📂 src/
│   ├── 📂 app/                     # App Router de Next.js
│   │   ├── 📂 contacto/           # Página de contacto
│   │   ├── 📂 normativas/         # Centro de normatividad
│   │   ├── 📂 planes/             # Planes de servicio
│   │   ├── 📂 pqrs/               # Sistema PQRS
│   │   ├── 📂 sobre-nosotros/     # Información corporativa
│   │   ├── 📄 layout.tsx          # Layout principal
│   │   ├── 📄 page.tsx            # Página de inicio
│   │   └── 📄 globals.css         # Estilos globales
│   ├── 📂 components/             # Componentes React
│   │   ├── 📂 common/             # Componentes comunes
│   │   └── 📂 sections/           # Secciones de páginas
│   └── 📂 config/                 # Configuración
├── 📄 next.config.ts              # Configuración de Next.js
├── 📄 tailwind.config.js          # Configuración de Tailwind
├── 📄 tsconfig.json               # Configuración de TypeScript
├── 📄 package.json                # Dependencias del proyecto
└── 📄 README.md                   # Este archivo
```

---

## 🧩 Componentes

### 🎯 **Componentes Principales**

#### 🏗️ **Layout**
- `Header.tsx` - Navegación responsiva con animaciones
- `Footer.tsx` - Footer corporativo con enlaces
- `WhatsAppFloat.tsx` - Botón flotante de WhatsApp

#### 📱 **Secciones**
- `HeroSection.tsx` - Sección principal con call-to-action
- `EmpresaSection.tsx` - Misión, visión y valores
- `ServiciosSection.tsx` - Planes y precios
- `IndicadoresSection.tsx` - Indicadores de calidad
- `ContactoSection.tsx` - Información de contacto

### ⚙️ **Configuración**
- `project-config.js` - Configuración centralizada de la empresa

---

## 📱 Contacto

### 📞 **Información de Contacto**
- **📱 WhatsApp**: [314 287 6981](https://wa.me/573142876981)
- **📧 Email**: ana.trabajeconnosotros.2024@gmail.com
- **🌐 Website**: [En construcción]

### 💬 **WhatsApp Business**
Contáctanos directamente a través de WhatsApp para:
- ✅ Cotizaciones personalizadas
- ✅ Soporte técnico
- ✅ Información sobre planes
- ✅ Programar instalación

---

## 🤝 Contribuir

### 🔄 **Flujo de Trabajo**

1. **🍴 Fork** el repositorio
2. **🌿 Crear** una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. **💾 Commit** los cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **📤 Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **🔀 Crear** un Pull Request

### 📝 **Convenciones de Commits**

```bash
# Tipos de commits
feat: nueva funcionalidad
fix: corrección de errores
docs: documentación
style: formato de código
refactor: refactorización
test: pruebas
chore: tareas de mantenimiento

# Ejemplo
feat: agregar sección de testimonios
fix: corregir navegación móvil
docs: actualizar README
```

### 🧪 **Testing**
```bash
# Verificar tipos
yarn type-check

# Análisis de código
yarn lint

# Construir proyecto
yarn build
```

---

## 📄 Licencia

```
© 2025 WAITELE COMUNICACIONES S.A.S
Todos los derechos reservados.

Este proyecto es propiedad de WAITELE COMUNICACIONES S.A.S
Para uso comercial, contactar: ana.trabajeconnosotros.2024@gmail.com
```

---

<div align="center">

### 🚀 **¿Necesitas fibra óptica de alta velocidad?**

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/573142876981)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ana.trabajeconnosotros.2024@gmail.com)

**¡Contáctanos hoy mismo y obtén la mejor conectividad!**

---

*Desarrollado con ❤️ para WAITELE COMUNICACIONES S.A.S*

</div>
