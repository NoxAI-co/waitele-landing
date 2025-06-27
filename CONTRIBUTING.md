# 🤝 Guía de Contribución - WAITELE COMUNICACIONES

¡Gracias por tu interés en contribuir al proyecto de WAITELE COMUNICACIONES S.A.S! Esta guía te ayudará a realizar contribuciones efectivas y mantener la calidad del código.

## 📋 Tabla de Contenidos

- [🚀 Primeros Pasos](#-primeros-pasos)
- [🔧 Configuración del Entorno](#-configuración-del-entorno)
- [📝 Convenciones de Código](#-convenciones-de-código)
- [💾 Convenciones de Commits](#-convenciones-de-commits)
- [🌿 Flujo de Trabajo con Git](#-flujo-de-trabajo-con-git)
- [🔀 Pull Requests](#-pull-requests)
- [🧪 Testing y Calidad](#-testing-y-calidad)
- [📱 Estándares de UI/UX](#-estándares-de-uiux)
- [📚 Documentación](#-documentación)

---

## 🚀 Primeros Pasos

### 1. Fork y Clone
```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/tu-usuario/waitele-landing.git
cd waitele-landing
```

### 2. Configurar el upstream
```bash
git remote add upstream https://github.com/original-owner/waitele-landing.git
```

### 3. Instalar dependencias
```bash
yarn install
```

### 4. Verificar configuración
```bash
yarn type-check
yarn lint
yarn build
```

---

## 🔧 Configuración del Entorno

### Herramientas Requeridas
- **Node.js**: 18.0.0 o superior
- **Yarn**: 1.22.0 o superior
- **Editor**: VSCode recomendado con extensiones:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript Hero

### Variables de Entorno
```bash
# Crear archivo .env.local
cp .env.example .env.local
```

---

## 📝 Convenciones de Código

### TypeScript
- **Tipado estricto**: Usar tipos explícitos siempre que sea posible
- **Interfaces**: Prefijar con `I` (ej: `IUser`, `IServicePlan`)
- **Enums**: Usar PascalCase (ej: `ServiceType`, `PlanStatus`)

```typescript
// ✅ Correcto
interface IServicePlan {
  id: string;
  name: string;
  speed: number;
  price: number;
}

// ❌ Incorrecto
interface servicePlan {
  id: any;
  name;
  speed;
  price;
}
```

### React/Next.js
- **Componentes**: PascalCase y archivos `.tsx`
- **Hooks personalizados**: Prefijo `use` (ej: `useWhatsApp`)
- **Props**: Interfaces explícitas

```typescript
// ✅ Correcto
interface IHeroSectionProps {
  title: string;
  subtitle?: string;
  onCTAClick: () => void;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ title, subtitle, onCTAClick }) => {
  return <section>...</section>;
};
```

### CSS/Tailwind
- **Clases ordenadas**: Responsive → Layout → Spacing → Typography → Colors → Effects
- **Componentes reutilizables**: Extraer clases repetitivas a componentes

```tsx
// ✅ Correcto
<button className="w-full md:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
  Contactar
</button>
```

---

## 💾 Convenciones de Commits

### Formato Conventional Commits
```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commits
- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Documentación
- **style**: Formato de código (sin cambios funcionales)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Pruebas
- **chore**: Tareas de mantenimiento
- **ci**: Configuración de CI/CD

### Scopes Disponibles
- **hero**: Sección principal
- **empresa**: Información corporativa
- **servicios**: Planes y precios
- **contacto**: Información de contacto
- **pqrs**: Sistema PQRS
- **normativas**: Centro de normatividad
- **indicadores**: Indicadores de calidad
- **ui**: Componentes de interfaz
- **config**: Configuración

### Ejemplos
```bash
feat(servicios): agregar filtro por velocidad en planes
fix(contacto): corregir validación de formulario WhatsApp
docs(readme): actualizar guía de instalación
style(hero): ajustar espaciado en dispositivos móviles
refactor(ui): extraer componente reutilizable para botones
perf(images): optimizar carga de imágenes de indicadores
```

---

## 🌿 Flujo de Trabajo con Git

### 1. Sincronizar con upstream
```bash
git checkout master
git pull upstream master
```

### 2. Crear rama feature
```bash
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b fix/corregir-bug
```

### 3. Desarrollar y commitear
```bash
# Hacer cambios
git add .
git commit -m "feat(servicios): agregar calculadora de precios"
```

### 4. Sincronizar frecuentemente
```bash
git fetch upstream
git rebase upstream/master
```

### 5. Push y PR
```bash
git push origin feature/nueva-funcionalidad
# Crear PR en GitHub
```

### Ramas Principales
- **master**: Código de producción
- **develop**: Desarrollo activo (si se usa)
- **feature/**: Nuevas funcionalidades
- **fix/**: Correcciones de errores
- **hotfix/**: Correcciones urgentes

---

## 🔀 Pull Requests

### Antes de Crear el PR
```bash
# ✅ Verificaciones obligatorias
yarn type-check    # Sin errores de TypeScript
yarn lint          # Sin errores de ESLint
yarn build         # Build exitoso
yarn dev           # Funciona en desarrollo
```

### Título del PR
```
<tipo>(<scope>): descripción breve

Ejemplos:
feat(contacto): agregar formulario de cotización
fix(hero): corregir animación en móviles
docs(readme): actualizar guía de contribución
```

### Descripción del PR
- Usar la plantilla proporcionada
- Incluir screenshots para cambios visuales
- Describir testing realizado
- Marcar todas las verificaciones

### Proceso de Revisión
1. **Auto-review**: Revisar tu propio código
2. **CI/CD**: Esperar que pasen todas las verificaciones
3. **Peer review**: Asignar revisor
4. **Merge**: Solo después de aprobación

---

## 🧪 Testing y Calidad

### Scripts de Verificación
```bash
# Verificar tipos TypeScript
yarn type-check

# Análisis de código
yarn lint
yarn lint:fix

# Build de producción
yarn build

# Verificación completa
yarn verify  # (si está configurado)
```

### Testing Manual
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resoluciones**: 320px, 768px, 1024px, 1920px
- **Funcionalidades**:
  - Navegación responsive
  - Formularios de contacto
  - Enlaces externos (WhatsApp)
  - Carga de documentos

### Performance
- **Lighthouse**: Score > 90 en todas las métricas
- **Core Web Vitals**: Cumplir estándares de Google
- **Carga de imágenes**: Lazy loading implementado
- **Bundle size**: Monitorear tamaño de archivos

---

## 📱 Estándares de UI/UX

### Diseño Responsive
- **Mobile First**: Desarrollar primero para móviles
- **Breakpoints**: Seguir sistema de Tailwind CSS
- **Touch targets**: Mínimo 44px para elementos táctiles
- **Legibilidad**: Contraste mínimo 4.5:1

### Colores Corporativos
```css
/* Paleta WAITELE */
--blue-primary: #1e40af;    /* Azul principal */
--blue-secondary: #3b82f6;  /* Azul secundario */
--blue-dark: #1e3a8a;       /* Azul oscuro */
--gray-text: #374151;       /* Texto principal */
--gray-light: #f3f4f6;      /* Fondo claro */
```

### Animaciones
- **Duración**: 150-300ms para transiciones
- **Easing**: `ease-in-out` por defecto
- **Reduce motion**: Respetar preferencias del usuario
- **Performance**: Usar `transform` y `opacity` preferentemente

### Tipografía
- **Font family**: Inter (Google Fonts)
- **Hierarchy**: h1 (32px) → h2 (24px) → h3 (20px) → body (16px)
- **Line height**: 1.5 para texto, 1.2 para títulos
- **Font weight**: 400 (normal), 600 (semibold), 700 (bold)

---

## 📚 Documentación

### Componentes
- Documentar props con JSDoc
- Incluir ejemplos de uso
- Especificar casos de error

```typescript
/**
 * Botón de WhatsApp flotante para contacto directo
 * 
 * @param message - Mensaje predefinido para WhatsApp
 * @param phoneNumber - Número de teléfono (formato internacional)
 * @param position - Posición del botón en pantalla
 * 
 * @example
 * <WhatsAppFloat 
 *   message="Hola, quiero información sobre planes"
 *   phoneNumber="573142876981"
 *   position="bottom-right"
 * />
 */
```

### README
- Mantener instrucciones actualizadas
- Incluir ejemplos de código
- Documentar nuevas funcionalidades

### Commits
- Descripción clara del cambio
- Incluir contexto si es necesario
- Referenciar issues relacionados

---

## ✅ Checklist de Contribución

### Antes de Commitear
- [ ] ✅ Código funcionando correctamente
- [ ] ✅ `yarn type-check` sin errores
- [ ] ✅ `yarn lint` sin errores
- [ ] ✅ Componentes documentados
- [ ] ✅ Testing manual realizado
- [ ] ✅ Responsive verificado

### Antes del Pull Request
- [ ] ✅ Rama actualizada con master
- [ ] ✅ `yarn build` exitoso
- [ ] ✅ Screenshots incluidos (cambios visuales)
- [ ] ✅ Descripción detallada
- [ ] ✅ Plantilla de PR completada

### Después del Merge
- [ ] ✅ Rama feature eliminada
- [ ] ✅ Documentación actualizada
- [ ] ✅ Issue cerrado (si aplica)

---

## 🆘 ¿Necesitas Ayuda?

- **📋 Issues**: Para reportar bugs o solicitar funcionalidades
- **💬 Discussions**: Para preguntas generales
- **📧 Email**: ana.trabajeconnosotros.2024@gmail.com
- **📱 WhatsApp**: 314 287 6981

---

**¡Gracias por contribuir a WAITELE COMUNICACIONES!** 🚀

*Tu aporte ayuda a mejorar la experiencia de nuestros clientes y el crecimiento de la empresa.* 