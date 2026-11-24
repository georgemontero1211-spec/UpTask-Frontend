# UpTask – Frontend

Interfaz web de **UpTask**, una aplicación para gestionar proyectos y tareas en equipo. Está construida con React, TypeScript, TanStack Query y Tailwind CSS, y consume la API de [UpTask-Server](https://github.com/georgemontero1211-spec/UpTask-Server).

## Funcionalidades

- **Cuenta de usuario**: registro, confirmación con un código de 6 dígitos, inicio de sesión, solicitud de un código nuevo y recuperación de contraseña.
- **Proyectos**: dashboard con los proyectos del usuario; crear, editar y eliminar proyectos (eliminar pide confirmar la contraseña).
- **Tareas**: crear, ver, editar y eliminar tareas, agrupadas por estado (pendiente, en espera, en progreso, en revisión, completada).
- **Equipo**: buscar usuarios por email y agregarlos al proyecto o quitarlos.
- **Notas**: comentarios dentro de cada tarea.
- **Permisos**: solo el manager del proyecto puede editarlo, gestionar el equipo y crear tareas; los colaboradores pueden cambiar el estado de las tareas y dejar notas.
- **Perfil**: editar nombre y email, y cambiar la contraseña.

## Rutas principales

| Ruta | Vista |
| ---- | ----- |
| `/` | Dashboard de proyectos |
| `/projects/create` | Nuevo proyecto |
| `/projects/:projectId` | Detalle del proyecto y sus tareas |
| `/projects/:projectId/edit` | Editar proyecto |
| `/projects/:projectId/team` | Equipo del proyecto |
| `/profile`, `/profile/password` | Perfil y cambio de contraseña |
| `/auth/login`, `/auth/register`, `/auth/confirm-account`, `/auth/request-code`, `/auth/forgot-password`, `/auth/new-password` | Autenticación |

## Tecnologías

- React + TypeScript + Vite
- TanStack Query
- React Router
- React Hook Form + Zod
- Axios
- Headless UI, Heroicons, Chakra Pin Input
- React Toastify
- Tailwind CSS

## Estructura

```
src/
├── components/   # Componentes por dominio: auth, projects, tasks, team, notes, profile
├── hooks/        # useAuth
├── layouts/      # AppLayout, AuthLayout, ProfileLayout
├── lib/          # Instancia de Axios con el token JWT
├── services/     # Llamadas a la API por recurso
├── types/        # Esquemas Zod y tipos
├── utils/        # Políticas de permisos y helpers
├── views/        # Páginas
└── router.tsx
```

## Configuración

Crea un archivo `.env` en la raíz con la URL de la API:

```env
VITE_API_URL=http://localhost:4000/api
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

| Script            | Descripción                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Servidor de desarrollo            |
| `npm run build`   | Compila TypeScript y genera build |
| `npm run preview` | Sirve el build de producción      |
| `npm run lint`    | Ejecuta ESLint                    |
