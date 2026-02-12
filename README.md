# Expense Tracker

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="120" alt="Next.js Logo" />
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
</p>

**Expense Tracker** es una aplicación para seguimiento de gastos, construida con **Next.js** y **NestJS** usando **TypeScript**.

Este README funciona como guía general del proyecto. Cada parte del proyecto (Frontend y Backend) tiene su propio README con información más detallada.

---

## Estructura del proyecto

Expense-tracker
├─ README .md # Este README principal
├─ expense-tracker-backend # Backend NestJS
│ └─ README .md # Documentación específica del backend
├─ expense-tracker-frontend # Frontend Next.js
│ └─ README .md # Documentación específica del frontend

- **Backend:** contiene la API REST para gestionar gastos.
- **Frontend:** consume la API y muestra la interfaz de usuario.

---

## Cómo empezar

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/expense-tracker.git
```

2. Entra en cada carpeta para instalar dependencias y ejecutar la aplicación:

**Backend**

```bash
cd expense-tracker-backend
npm install
npm run start:dev
```

La API estará disponible en `http://localhost:3001`

**Frontend**

```bash
cd expense-tracker-frontend
npm install
npm run dev
```

## Documentación específica

- **Backend**: [expense-tracker-backend/README.md](https://github.com/noaregui/expense-tracker/tree/master/expense-tracker-backend#readme)
  Contiene información sobre estructura, endpoints, validaciones y arquitectura.
- **Frontend**: [expense-tracker-frontend/README.md](https://github.com/noaregui/expense-tracker/tree/master/expense-tracker-frontend#readme)
  Contiene información sobre estructura, componentes, consumo de API y consideraciones técnicas.

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación NestJS](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
