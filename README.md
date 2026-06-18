# Laboratorio de Landing Pages - Comparativa de Agentes IA

Este repositorio contiene la entrega del proyecto de desarrollo y despliegue comparativo utilizando diferentes modelos de Inteligencia Artificial para la materia de desarrollo de software.

## 👤 Datos del Estudiante
* **Nombre y Apellido:** Martín Alberto Juan
* **Carrera:** Tecnicatura en Desarrollo de Software
* **Materia:** Desarrollo de Sistemas Web (Front End)
* **Comision:** 2D

## 🚀 Despliegue Unificado
El proyecto se encuentra totalmente unificado y deployado en un único enlace a través de **Vercel**, el cual dirige a la raíz (`index.html`) sirviendo de portada dinámica hacia las diferentes resoluciones:

👉 **[Link al Deploy Unificado en Vercel](https://tu-proyecto-landing-pages.vercel.app)** *(Nota: Reemplazar por tu URL real de Vercel)*

---

## 📝 Prompt Exacto Utilizado
A continuación se detalla el prompt plano que se utilizó en común para alimentar a ambos agentes de Inteligencia Artificial, que fue realizado en ingles para lograr mayor eficacia de los agentes:

```text
ROLE
You are a senior Full Stack Engineer, Senior UX/UI Designer, and Frontend Architect with extensive experience building high-conversion landing pages for production environments.
Your task is to autonomously design and implement a complete, modern, responsive Landing Page without requiring further clarification.
OBJECTIVE
Create a professional landing page for a fictional technology company called "NovaTech Solutions", a company that helps businesses accelerate digital transformation through software development, artificial intelligence, cloud solutions, and process automation.
The website must be visually attractive, conversion-oriented, mobile-first, accessible, and production-ready.
MANDATORY SECTIONS
The landing page must contain all of the following sections:

1. Header
   * Company logo/text
   * Responsive navigation menu
   * CTA button
2. Hero Section
   * Strong headline
   * Supporting subtitle
   * Primary Call-To-Action button
   * Secondary action button
3. About Us
   * Company description
   * Mission statement
   * Value proposition
4. Services Section Include at least 4 services:
   * Custom Software Development
   * Artificial Intelligence Solutions
   * Cloud Infrastructure
   * Business Process Automation
5. Features / Benefits Section Present at least 6 key benefits.
6. Testimonials Section Include at least 3 realistic client testimonials with:
   * Name
   * Role
   * Company
   * Testimonial text
7. Contact Section Visual contact form only:
   * Name
   * Email
   * Company
   * Message No backend implementation required.
8. Footer
   * Navigation links
   * Copyright notice
   * Social media links:
      * LinkedIn
      * X/Twitter
      * Instagram
      * GitHub
DESIGN REQUIREMENTS

* Modern SaaS aesthetic.
* Professional and trustworthy appearance.
* Responsive on mobile, tablet, and desktop.
* Consistent visual hierarchy.
* Strong typography.
* Appropriate spacing and alignment.
* Smooth hover effects and subtle animations.
* Accessible color contrast.
* Clean component structure.
TECHNICAL REQUIREMENTS

* Use modern frontend best practices.
* Produce clean and maintainable code.
* Organize components logically.
* Avoid unnecessary dependencies.
* Ensure responsive layouts.
* Follow accessibility best practices (ARIA where appropriate).
* Optimize for performance.
CONTENT REQUIREMENTS

* Generate realistic marketing copy.
* Avoid placeholder text such as "Lorem Ipsum".
* Write persuasive but professional content.
* Maintain consistency across all sections.
AUTONOMY RULE
Do not ask follow-up questions.
Make reasonable assumptions whenever information is missing and continue implementation autonomously.
QUALITY CHECKLIST
Before finalizing, verify that:

* All mandatory sections exist.
* Navigation links work correctly.
* Responsive design is implemented.
* Layout has no visual inconsistencies.
* CTA buttons are clearly visible.
* Testimonials appear realistic.
* Footer contains all required links.
* The page looks deployment-ready.
OUTPUT
Deliver the complete implementation ready to run without additional modifications.
```

---

## 🛠️ Estructura del Repositorio

Para que el deploy unificado funcione correctamente manteniendo las rutas relativas de la portada, la estructura interna del repositorio está organizada de la siguiente manera:

```text
├── index.html               # Archivo de Portada Principal (Página raíz solicitada)
├── prompt.txt               # Archivo de texto plano con el prompt exacto
├── styles/                  # Carpeta de estilos globales de la portada
│   └── portada-styles.css   # Hoja de estilos CSS para la página de portada
├── claude_project/          # Carpeta para el Primer Agente (Claude)
│   └── index.html           # Landing page monolítica generada por Claude
└── codex_project/           # Carpeta para el Segundo Agente (Codex)
    ├── index.html           # Estructura HTML de Codex
    ├── styles.css           # Hoja de estilos CSS de la landing de Codex
    ├── script.js            # Archivo de interacciones JavaScript
    └── assets/              # Carpeta de recursos multimedia
        └── imagen.png       # Imagen utilizada en el proyecto
```


## 📸 Capturas de Pantalla de los Sitios Web

## 1. Landing Page - Primer Agente (Codex)
## 📸 Capturas de Pantalla de la Interfaz

A continuación se detallan de forma secuencial los componentes visuales clave desarrollados para las landing pages, divididos por secciones según su arquitectura de diseño:

### 🗺️ 1. Barra de Navegación (Navbar)
![Barra de Navegación](/codex_project/assets/screenshots/NavBar.png)
*Estructura de la cabecera que incluye el branding del sitio, menú dinámico de enlaces internos y accesos directos responsivos.*

### 🚀 2. Sección Principal (Hero Section)
![Sección Hero](/codex_project/assets/screenshots/Hero_Section.png)
*Pantalla de impacto inicial que presenta la propuesta de valor principal, el título destacado (Heading) y el botón de llamada a la acción (CTA).*

### 🛠️ 3. Sección de Servicios (Services)
![Sección de Servicios](/codex_project/assets/screenshots/Services.png)
*Cuadrícula o layout dinámico donde se exponen las funcionalidades clave, características o servicios del producto de software.*

### 👥 4. Quiénes Somos (About Us)
![Sección Quiénes Somos](/codex_project/assets/screenshots/About_us.png)
*Componente institucional orientado a generar confianza, detallando el trasfondo de la empresa o el propósito del proyecto.*

### 💬 5. Reseñas y Testimonios (Reviews)
![Sección de Reseñas](/codex_project/assets/screenshots/Reviews.png)
*Bloque de prueba social que muestra la experiencia de usuarios previos con tarjetas de comentarios y calificaciones.*

### 📬 6. Formulario de Contacto (Contact)
![Sección de Contacto](/codex_project/assets/screenshots/Contact.png)
*Interfaz de captura de leads que contiene los campos validados para la comunicación directa con el usuario.*

### 🏁 7. Pie de Página (Footer)
![Pie de Página](/codex_project/assets/screenshots/Footer.png)
*Cierre de la página con derechos de autor, enlaces secundarios de navegación, políticas legales y accesos a redes sociales.*


### 2. Landing Page - Segundo Agente (Claude)
![Captura Codex](/claude_project/)
* Modularización limpia, componentes reactivos aislados en CSS y JS.*

A continuación se detallan de forma secuencial los componentes visuales clave desarrollados para las landing pages, divididos por secciones según su arquitectura de diseño:

### 🗺️ 1. Barra de Navegación (Navbar)
![Barra de Navegación](/claude_project/assets/screenshots/NavBar.png)
*Estructura de la cabecera que incluye el branding del sitio, menú dinámico de enlaces internos y accesos directos responsivos.*

### 🚀 2. Sección Principal (Hero Section)
![Sección Hero](/claude_project/assets/screenshots/Hero_section.png)
*Pantalla de impacto inicial que presenta la propuesta de valor principal, el título destacado (Heading) y el botón de llamada a la acción (CTA).*

### 🛠️ 3. Sección de Servicios (Services)
![Sección de Servicios](/claude_project/assets/screenshots/Services.png)
*Cuadrícula o layout dinámico donde se exponen las funcionalidades clave, características o servicios del producto de software.*

### 👥 4. Quiénes Somos (About Us)
![Sección Quiénes Somos](/claude_project/assets/screenshots/About_us.png)
*Componente institucional orientado a generar confianza, detallando el trasfondo de la empresa o el propósito del proyecto.*

### 💬 5. Reseñas y Testimonios (Reviews)
![Sección de Reseñas](/claude_project/assets/screenshots/Reviews.png)
*Bloque de prueba social que muestra la experiencia de usuarios previos con tarjetas de comentarios y calificaciones.*

### 📬 6. Formulario de Contacto (Contact)
![Sección de Contacto](/claude_project/assets/screenshots/Contact.png)
*Interfaz de captura de leads que contiene los campos validados para la comunicación directa con el usuario.*

### 🏁 7. Pie de Página (Footer)
![Pie de Página](/claude_project/assets/screenshots/Footer.png)
*Cierre de la página con derechos de autor, enlaces secundarios de navegación, políticas legales y accesos a redes sociales.*
