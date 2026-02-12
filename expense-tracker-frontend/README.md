<p align="center">
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="120" alt="Next.js Logo" />
  </a>
</p>
<p align="center">
Frontend de la aplicación de seguimiento de gastos (Expense Tracker) construido con <a href="https://nextjs.org/" target="_blank">Next.js</a> y <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>.
</p>

---

## Descripción

Esta aplicación permite:

- Listar los gastos existentes desde la API
- Crear un nuevo gasto
- Editar un gasto existente
- Gestionar estados de carga y error en el frontend

La aplicación consume la API desarrollada en **NestJS** (backend).

---

## Estructura del proyecto

```
expense-tracker-frontend
├─ next-env.d.ts
├─ package-lock.json
├─ package.json
├─ pages
│ ├─ index.tsx        //Página principal de la aplicación
│ └─ _app.tsx         //Componente que envuelve todas las páginas
├─ README.md
├─ src
│ ├─ api
│ │ ├─ expenses.ts    //Funciones para interactuar con el backend (GET, POST, PATCH)
│ │ └─ types.ts       //Tipos TypeScript para los gastos
│ ├─ App.css          //Estilos específicos de la aplicación
│ └─ index.css        //Estilos globales
└─ tsconfig.json      //Configuración de TypeScript

```

---

## Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Modo desarrollo (con recarga automática):

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## Funcionalidades principales

- **Listar gastos:** se consumen los datos del backend y se muestran en una lista con formato de € y fecha.

- **Crear gasto:** formulario que valida título, cantidad y fecha antes de enviar.

- **Editar gasto:** se precargan los datos del gasto seleccionado para modificarlo.

- **Manejo de estados:** loading mientras se cargan datos y alertas en caso de errores.

---

## Consideraciones técnicas

- **Next.js + TypeScript:** estructura basada en páginas y componentes funcionales.

- **Consumo de API con Axios:** funciones centralizadas en `src/api/expenses.ts`.

- **CSS modular:** estilos globales en `index.css` y específicos en `App.css`.

- **Gestión de estado local:** hooks `useState` y `useEffect`.

- **Responsive:** contenido centrado.

---

## Decisiones y trade-offs

- No se usa gestión de estado global (Redux/Context) porque la app es pequeña.

- No se implementó UI avanzada ni librerías externas de componentes.

- Persistencia y lógica de negocio delegada al backend; frontend enfocado en presentación y consumo de API.

---

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
