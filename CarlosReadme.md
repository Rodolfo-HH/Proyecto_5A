<table width="80%" margin="1">
<tr>
<td width="50%" align="center"><img src="Frontend/Imagenes/logoOficial.png"></td>
<td width="100%" align="center"><img src="Frontend/Imagenes/logoti.png"></td>
</tr>
</table>

# Universidad Tecnologica de Xicotepec de Juarez

## T.S.U. en Desarrollo de Software Multiplataforma

### Integrantes del equipo, grado y grupo:

**Nombre del equipo:** 
## Legacy of the Final Code
**Nombre del producto:**
## Proyecto - Carnny
**Materia**
## Aplicacione Web Orientada a Servicios

### Integrantes:

**Rodolfo Hernández Hernández 5º "A"** <br>
**Fernando Miguel Pérez 5º "A"** <br>
**Carlos Alberto Cabrera Solís 5º "A"** <br>
**Juan Carlos Cobos Vega 5º "A"** <br>

<table width="80%" margin="1">
<tr>
<td>Logo de la aplicación</td>
<td>Logo del equipo</td>
</tr>
<tr>
<td width="50%" align="center"><img src="Frontend/Imagenes/logoApp.png"></td>
<td width="100%" align="center"><img src="Frontend/Imagenes/logoequipo.png"></td>
</tr>
</table>

---

## Descripción General

La aplicación web de la carnicería es una herramienta digital diseñada para apoyar la gestión administrativa y operativa del negocio, facilitando el control eficiente de sus procesos internos. Esta plataforma está orientada principalmente a los usuarios administradores y cajeras(os), quienes requieren un sistema confiable para organizar la información y atender a los clientes de manera ágil.

A través de la aplicación web, es posible administrar el catálogo de productos, incluyendo los diferentes cortes de carne, precios, categorías y existencias disponibles. Además, el sistema permite llevar un control del inventario, ayudando a mantener actualizados los niveles de stock y evitando faltantes o pérdidas. La gestión de clientes también forma parte fundamental de la plataforma, ya que se pueden registrar, consultar y actualizar sus datos para mejorar la atención y el seguimiento de compras.

Otro módulo importante es el registro de ventas, el cual permite a las cajeras(os) realizar transacciones de forma rápida y segura, aplicando promociones o descuentos cuando corresponda. Asimismo, la aplicación ofrece la posibilidad de administrar recetas y promociones, información que posteriormente puede ser consultada por los clientes desde la aplicación móvil complementaria.

La interfaz de la aplicación web está diseñada como un panel administrativo, con formularios claros, tablas organizadas y opciones de navegación intuitivas, lo que mejora la eficiencia del trabajo diario. En conjunto, esta aplicación web contribuye a optimizar los procesos de la carnicería, mejorar el control de la información y brindar un mejor servicio al cliente.

---

## Objetivo del Proyecto

Desarrollar e implementar una aplicación web orientada a la gestión administrativa y operativa de una carnicería, que permita centralizar y organizar de manera eficiente la información relacionada con el catálogo de productos, el control de inventario, el registro y seguimiento de clientes, así como el proceso de ventas diarias. La aplicación busca apoyar el trabajo del personal administrativo y de las cajeras(os), proporcionando herramientas digitales que faciliten la captura, consulta, actualización y control de datos de forma segura y ordenada.

Así mismo, la aplicación web tiene como objetivo optimizar los procesos internos del negocio, reduciendo errores en el manejo de información, mejorando el control de existencias y agilizando la atención al cliente en el punto de venta. Mediante una interfaz intuitiva y fácil de usar, el sistema permitirá administrar promociones, descuentos y recetas, información que podrá ser compartida con los clientes a través de una aplicación móvil complementaria.

Finalmente, el desarrollo de esta aplicación web pretende contribuir a la modernización de la carnicería, fortaleciendo la toma de decisiones mediante el acceso oportuno a información actualizada, mejorando la eficiencia operativa y elevando la calidad del servicio ofrecido, apoyándose en el uso de tecnologías web que favorezcan la productividad y el crecimiento del negocio.

---

## Tecnologías Utilizadas

### 🔹 Frontend

* HTML5
* CSS3 (TailwindCSS)
* JavaScript
* PUG

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Base de Datos

* MySQL

### 🔹 Herramientas

* Git & GitHub
* Figma

---

## Arquitectura del Sistema

El sistema está dividido en tres capas principales:

* **Frontend:** Interfaz de usuario y experiencia visual.
* **Backend:** Lógica de negocio, autenticación y conexión con la base de datos.
* **API REST:** Manejo de endpoints para comunicación entre cliente y servidor.
* **Integraciones externas:** Consumo de APIs de terceros para enriquecer la funcionalidad.

---

## Estructura del Proyecto

```
/
├── /frontend        → Interfaz de usuario
├── /backend         → Lógica del sistema
├── /api             → APIs propias y externas
├── /docs            → Documentación del proyecto
├── /tests           → Pruebas del sistema
└── readme.md        → Documentación principal
```

---

## Funcionalidades Principales

* Registro de usuarios
* Inicio de sesión con autenticación segura
* CRUD de propiedades
* Validaciones de datos
* Encriptación de contraseñas
* Consumo de APIs externas
* Manejo de errores
* Envío de correos electrónicos (si aplica)

---

## API REST (Propia)

El sistema implementa una API REST con los siguientes métodos:

* `GET` → Obtener información
* `POST` → Crear registros
* `PUT` → Actualizar registros completos
* `PATCH` → Actualizar parcialmente
* `DELETE` → Eliminar registros

---

## APIs de Terceros

Se integran APIs externas para enriquecer la aplicación, tales como:

* APIs de contenido (ej: multimedia o datos financieros)
* Servicios externos de consulta de información

---

## Testing

Se realizaron pruebas funcionales para validar:

* Registro e inicio de sesión
* Operaciones CRUD
* Validaciones de formularios
* Manejo de errores

Las pruebas se encuentran documentadas en la carpeta `/tests`.

---

## Uso de Inteligencia Artificial

Se utilizaron herramientas de IA generativa como apoyo en:

* Generación de código base
* Optimización de funciones
* Resolución de errores

Todo el uso está documentado en la carpeta `/docs/prompting`.

---

## Trabajo Colaborativo

El desarrollo del proyecto se realizó mediante control de versiones utilizando Git, evidenciando:

* Commits constantes
* Uso de ramas
* Integración de cambios mediante pull requests

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instalar dependencias

```
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` con:

```
BD_HOST=localhost
BD_USER=root
BD_PASS=tu_password
BD_NOMBRE=bienes_raices
JWT_SECRET=clave_secreta
```

### 4. Ejecutar el servidor

```
npm run dev
```

---

##  Estado del Proyecto

✅ En desarrollo / funcional
⚠️ Puede presentar mejoras futuras

---

## 🎤 Presentación

El proyecto incluye una presentación disponible en:

```
/docs/presentation/
```

---

##  Conclusión

Este proyecto demuestra la implementación de una aplicación web completa, integrando frontend, backend, APIs REST y servicios externos, cumpliendo con los requerimientos académicos y aplicando buenas prácticas de desarrollo.

---

##  Autor

* Carlos Alberto Cabrera Solis

---

## 📅 Fecha

Abril 2026
