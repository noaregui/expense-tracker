<p align="center">
  <a href="https://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">Backend de una aplicación de seguimiento de gastos (Expense Tracker) construida con <a href="https://nestjs.com/" target="_blank">NestJS</a> y <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>.</p>

---

## Descripción

Esta aplicación permite:

- Registrar un gasto
- Listar todos los gastos
- Actualizar parcialmente un gasto existente

La persistencia de datos se realiza en memoria para simplificar la implementación. No se utiliza base de datos real.

---

## Estructura del proyecto

```
expense-tracker-backend
├─ .prettierrc
├─ eslint.config.mjs
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.module.ts
│  ├─ application
│  │  └─ expenses
│  │     ├─ create-expense.use-case.ts
│  │     ├─ list-expenses.use-case.ts
│  │     └─ update-expense.use-case.ts
│  ├─ domain
│  │  └─ entities
│  │     └─ expense.entity.ts
│  ├─ expenses
│  │  ├─ dto
│  │  │  ├─ create-expense.dto.ts
│  │  │  └─ update-expense.dto.ts
│  │  ├─ expenses.controller.spec.ts
│  │  ├─ expenses.controller.ts
│  │  ├─ expenses.module.ts
│  │  └─ expenses.service.spec.ts
│  ├─ infrastructure
│  │  └─ expenses.repository.ts
│  └─ main.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```

---

## Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Modo desarrollo (con recarga automática)

```bash
npm run start:dev
```

Modo producción:

```bash
npm run start:prod
```

---

## Estructura y responsabilidades

<ul>
  <li>src/main.ts: punto de entrada de la aplicación, activa validaciones globales y CORS.</li>
  <li>src/domain/: contiene las entidades del dominio. Actualmente solo <code>Expense</code>.</li>
  <li>src/application/expenses/: contiene los casos de uso (<code>CreateExpenseUseCase</code>, <code>ListExpensesUseCase</code>, <code>UpdateExpenseUseCase</code>), que implementan la lógica de negocio y delegan la persistencia al repositorio.</li>
  <li>src/infrastructure/: implementación de persistencia y acceso a datos. Actualmente <code>ExpensesRepository</code> almacena los gastos en memoria.</li>
  <li>src/expenses/dto/: definición de los Data Transfer Objects para creación y actualización de gastos (<code>CreateExpenseDto</code> y <code>UpdateExpenseDto</code>).</li>
  <li>src/expenses/expenses.controller.ts: endpoints HTTP que consumen los casos de uso.</li>
  <li>src/expenses/expenses.module.ts: módulo que agrupa el controlador y los casos de uso, y registra el repositorio como proveedor.</li>
  <li>test/: pruebas de integración y unitarias.</li>
</ul>

---

## Endpoints disponibles

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/expenses</td>
      <td>Listar todos los gastos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/expenses</td>
      <td>Crear un nuevo gasto</td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>/expenses/:id</td>
      <td>Actualizar parcialmente un gasto existente</td>
    </tr>
  </tbody>
</table>

<p>Todos los endpoints reciben y devuelven <code>JSON</code>.</p>

---

## Validaciones implementadas

Se usan `class-validator` y `ValidationPipe` de NestJS para validar automáticamente los datos de entrada.

- **CreateExpenseDto**
  - `title`: mínimo 3 caracteres
  - `amount`: número positivo (>= 0.01)
  - `date`: formato ISO (YYYY-MM-DD)
  - `category`: opcional

- **UpdateExpenseDto**
  - Todos los campos son opcionales
  - Cuando se envían, siguen las mismas reglas de validación que en CreateExpenseDto

---

## Arquitectura y decisiones técnicas

- **Separación de capas (Clean Architecture / CQRS simplificado)**:
  - **Domain**: entidades del dominio (`Expense`).
  - **Application**: casos de uso que implementan la lógica de negocio y orquestan las operaciones.
  - **Infrastructure**: repositorios y servicios externos (por ejemplo, base de datos o almacenamiento en memoria).
  - **Controller / DTO**: interfaz HTTP y validación de entrada.
- Esto permite que la lógica de negocio esté desacoplada de la persistencia y de la presentación (HTTP), haciendo el proyecto más escalable y mantenible.

- **Repository pattern**: `ExpensesRepository` actúa como capa de persistencia. Los casos de uso no interactúan directamente con arrays internos ni con el controller.

- **Persistencia en memoria**: simplifica la implementación para el ejercicio; para producción se recomienda reemplazar `ExpensesRepository` por una base de datos real.

- **Endpoints REST**: cada operación del dominio tiene su caso de uso y es expuesta mediante endpoints HTTP.

- **Validaciones automáticas**: con `class-validator` y `ValidationPipe` de NestJS.

---

## Recursos

- [Documentación NestJS](https://docs.nestjs.com/)
- [Class Validator](https://github.com/typestack/class-validator)

```
expense-tracker-backend
├─ .prettierrc
├─ eslint.config.mjs
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.module.ts
│  ├─ application
│  │  └─ expenses
│  │     ├─ create-expense.use-case.ts
│  │     ├─ list-expenses.use-case.ts
│  │     └─ update-expense.use-case.ts
│  ├─ domain
│  │  └─ entities
│  │     └─ expense.entity.ts
│  ├─ expenses
│  │  ├─ dto
│  │  │  ├─ create-expense.dto.ts
│  │  │  └─ update-expense.dto.ts
│  │  ├─ expenses.controller.spec.ts
│  │  ├─ expenses.controller.ts
│  │  ├─ expenses.module.ts
│  │  └─ expenses.service.spec.ts
│  ├─ infraestructure
│  │  └─ expenses.repository.ts
│  └─ main.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```
```
expense-tracker-backend
├─ .prettierrc
├─ eslint.config.mjs
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.module.ts
│  ├─ application
│  │  └─ expenses
│  │     ├─ create-expense.use-case.ts
│  │     ├─ list-expenses.use-case.ts
│  │     └─ update-expense.use-case.ts
│  ├─ domain
│  │  └─ entities
│  │     └─ expense.entity.ts
│  ├─ expenses
│  │  ├─ dto
│  │  │  ├─ create-expense.dto.ts
│  │  │  └─ update-expense.dto.ts
│  │  ├─ expenses.controller.spec.ts
│  │  ├─ expenses.controller.ts
│  │  ├─ expenses.module.ts
│  │  └─ expenses.service.spec.ts
│  ├─ infraestructure
│  │  └─ expenses.repository.ts
│  └─ main.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```