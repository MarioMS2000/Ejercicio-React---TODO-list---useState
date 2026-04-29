# TODO List React + useState ✅

Aplicación de lista de tareas hecha con **React + Vite** para practicar el uso de `useState`, `useEffect`, componentes, formularios, renderizado de listas, eventos y estilos CSS.

La app permite añadir tareas, borrarlas, vaciar la lista completa, restaurar las tareas iniciales desde un JSON, marcar tareas como completadas y editar una tarea existente. ✨

## 🚀 Demo del proyecto

Proyecto desplegado en **Netlify**:

🔗 [Ver TODO List React en Netlify](https://todolistreact-mario.netlify.app/)

## 🛠️ Tecnologías usadas

- ⚛️ **React**
- ⚡ **Vite**
- 🧠 **useState**
- 🔁 **useEffect**
- 🆔 **UUID**
- 🎨 **CSS**
- 📦 **NPM**
- 🌐 **Netlify**

## 📌 Objetivo del ejercicio

Crear una **TODO List** haciendo uso de `useState`, separando la aplicación en componentes y trabajando con datos precargados desde un archivo JSON.

## ✅ Requisitos del ejercicio

### 🧩 Fase 1

- ✅ Crear un formulario con `input` y botón.
- ✅ Crear un componente `List` que recorra una lista de tareas.
- ✅ Crear un componente `Item` para pintar cada tarea.
- ✅ Añadir botón **CLEAR** para borrar todas las tareas.
- ✅ Añadir botón **BORRAR / DELETE** en cada tarea para eliminarla de forma independiente.
- ✅ Añadir botón **RESET** para restaurar las tareas iniciales.
- ✅ Dar estilos CSS a los componentes.
- ✅ Precargar tareas desde un archivo JSON.
- ✅ Usar UUID para crear identificadores únicos en las nuevas tareas.

### 🔁 Flujo de la aplicación

- Al iniciar la app se muestran el input y las tareas precargadas.
- Si se escribe una tarea y se pulsa **ADD**, se añade debajo del input.
- Al añadir una tarea, el input se limpia automáticamente.
- Las tareas iniciales se cargan desde `src/data/tasks.json`.
- El botón **RESET** restaura únicamente las tareas originales del JSON.
- El botón **CLEAR** deja la lista vacía.
- Cada tarea tiene su propio botón para eliminarla.

### 🧪 Fase 2

- ✅ El botón **ADD** solo aparece cuando hay texto en el input.
- ✅ Al añadir una tarea, el input se limpia.
- ✅ Después de añadir una tarea, el botón **ADD** desaparece porque el input queda vacío.
- ✅ La precarga de datos se hace usando lifecycle con `useEffect`.
- ✅ Si pasan 20 segundos sin enviar la tarea escrita, el input se vacía automáticamente.
- ✅ Cuando se añade una tarea, aparece un mensaje de éxito durante 5 segundos.
- ✅ Validación: la tarea debe tener al menos 6 caracteres.
- ✅ Si la validación falla, se muestra un mensaje de error.

### ✏️ Fase 3

- ✅ Editar tarea.
- ✅ Al hacer clic en **EDIT**, el formulario se rellena con el título de la tarea seleccionada.
- ✅ Guardar los cambios de la tarea editada.
- ✅ Marcar tareas como completadas con **DONE**.
- ✅ Las tareas completadas aparecen tachadas.
- ✅ Eliminar tareas de forma individual.
- ✅ Dividir la aplicación en componentes pequeños y reutilizables.
- ✅ Preparar el proyecto para desplegarlo en Netlify.

## 🧠 Estructura de una tarea

Cada tarea se guarda como un objeto con esta estructura:

```js
{
  title: "Tarea",
  desc: "Descripción",
  isDone: false,
  _id: "1"
}
```

Las nuevas tareas usan `uuid` para generar un `_id` único.

## 📁 Estructura del proyecto

```txt
src/
├── components/
│   ├── Button.jsx
│   ├── Form.jsx
│   ├── Item.jsx
│   └── List.jsx
├── data/
│   └── tasks.json
├── template/
│   └── LayoutDefault.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🧩 Componentes principales

### `App.jsx` 🏠

Componente principal de la aplicación. Gestiona el estado global de las tareas y contiene las funciones para:

- Añadir tareas.
- Borrar una tarea.
- Borrar todas las tareas.
- Restaurar las tareas iniciales.
- Marcar una tarea como completada.
- Seleccionar una tarea para editar.
- Actualizar una tarea editada.

### `Form.jsx` 📝

Componente del formulario. Gestiona:

- El valor del input.
- La validación mínima de 6 caracteres.
- El mensaje de error.
- El mensaje de éxito.
- El temporizador de 20 segundos para limpiar el input.
- El modo añadir o editar tarea.

### `List.jsx` 📋

Componente encargado de recorrer el array de tareas con `.map()` y pintar un componente `Item` por cada tarea.

### `Item.jsx` ✅

Componente que representa una tarea individual. Incluye:

- Título de la tarea.
- Botón **EDIT**.
- Botón **DONE**.
- Botón **DELETE**.
- Estilo tachado cuando la tarea está completada.

### `tasks.json` 📦

Archivo con las tareas iniciales que se cargan al montar la aplicación.

## 🎨 Estilos

Los estilos están definidos principalmente en `src/App.css`.

La app incluye:

- Contenedor centrado.
- Formulario alineado.
- Botones para acciones principales.
- Lista sin viñetas.
- Tarjetas simples para cada tarea.
- Estilo tachado para tareas completadas.
- Mensajes de error y éxito.

## ▶️ Cómo ejecutar el proyecto en local

Primero instala las dependencias:

```bash
npm install
```

Después arranca el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una URL local parecida a:

```txt
http://localhost:5173
```

## 🧪 Comprobar que compila

Antes de desplegar, es importante comprobar que el proyecto genera la build correctamente:

```bash
npm run build
```

Este comando crea la carpeta:

```txt
dist
```

Si `npm run build` falla en local, también fallará en Netlify.

## 📜 Scripts disponibles

```bash
npm run dev
```

Arranca el proyecto en modo desarrollo.

```bash
npm run build
```

Genera la versión final de producción.

```bash
npm run preview
```

Permite previsualizar la build de producción.

```bash
npm run lint
```

Ejecuta ESLint para revisar el código.

## 🌐 Despliegue de una app React con Vite en Netlify

### 1. Comprobar que la app funciona en local ✅

Antes de desplegar, hay que comprobar que el proyecto instala dependencias y compila correctamente:

```bash
npm install
npm run build
```

Qué hace cada comando:

- `npm install` instala las dependencias del proyecto.
- `npm run build` genera la versión final de producción.

### 2. Subir el proyecto a GitHub 🐙

Cuando todo funcione:

```bash
git add .
git commit -m "Finish project"
git push origin main
```

Qué hace cada comando:

- `git add .` prepara los archivos para el commit.
- `git commit -m "Finish project"` guarda los cambios en Git.
- `git push origin main` sube el proyecto a GitHub en la rama `main`.

Netlify leerá el proyecto directamente desde GitHub.

### 3. Crear el deploy en Netlify 🚀

Pasos:

1. Entrar en [Netlify](https://www.netlify.com/).
2. Pulsar **Add new project**.
3. Elegir **Import an existing project**.
4. Conectar con GitHub.
5. Seleccionar el repositorio del proyecto.

### 4. Configurar el deploy ⚙️

Como el proyecto está hecho con **React + Vite**, la configuración correcta es:

```txt
Branch to deploy: main
Build command: npm run build
Publish directory: dist
```

Qué significa:

- **Branch to deploy**: rama que Netlify va a publicar.
- **Build command**: comando para generar la app.
- **Publish directory**: carpeta final que Netlify sube a producción.

En Vite, la build siempre se genera en:

```txt
dist
```

### 5. Lanzar el deploy 🎯

Pulsar **Deploy site**.

Netlify hará automáticamente:

- Clonar el repositorio.
- Instalar dependencias.
- Ejecutar la build.
- Publicar la app.

### 6. Obtener la URL pública 🔗

Cuando termine el deploy, Netlify generará una URL pública, por ejemplo:

```txt
https://dreamy-tanuki-9eb60a.netlify.app
```

Esa URL será el enlace de entrega.

También se puede ver pulsando:

```txt
Open production deploy
```

### 7. Cambiar el nombre del dominio (opcional) ✨

Netlify genera un nombre automático, pero se puede cambiar.

Pasos:

1. Ir al proyecto en Netlify.
2. Entrar en **Gestión de dominios**.
3. Buscar **Change site name**.
4. Escribir un nombre nuevo.
5. Guardar los cambios.

Ejemplo:

```txt
todo-list-react-tu-nombre.netlify.app
```

## 📌 Estado final

El proyecto cumple las tres fases del ejercicio:

- ✅ TODO List con React.
- ✅ Estado gestionado con `useState`.
- ✅ Precarga de datos con `useEffect`.
- ✅ Componentes separados.
- ✅ Validaciones.
- ✅ Temporizadores.
- ✅ Edición de tareas.
- ✅ Tareas completadas.
- ✅ Borrado individual.
- ✅ Reset y clear.
- ✅ Preparado para despliegue en Netlify.

---

Hecho con React, práctica y muchas tareas por tachar. ✅
