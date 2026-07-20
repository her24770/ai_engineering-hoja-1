# Shop 502 — Cart TUI

POC de una TUI (Text User Interface) para el manejo del carrito de compras de un usuario anonimo, hecha para Shop 502 como parte de la Hoja de Trabajo #1 de CC3116 (SDLC + AI).

## Prerequisitos

- Node.js **20+**
- npm

## Quickstart

```bash
npm install
npm run dev        # correr la TUI en modo desarrollo
npm run test        # correr tests
npm run coverage     # correr tests con reporte de cobertura
npm run build         # compilar a dist/
npm run package        # compilar + generar binarios standalone en dist-bin/
```

## Ejemplo de uso

```
| Por favor ingrese su nombre.
> Rodrigo Custodio
| Hola Rodrigo! Que deseas modificar en tu carrito?
> 12345 5
| Tu carrito es:
|   - 1234 con 5 unidades
| Que más deseas hacer?
> 12345 -5
| Tu carrito está vacío, que más deseas hacer?
> 12345 -5
| Oops parece que no tienes el producto 12345 agregado a tu carrito. Que más deseas hacer?
> 456 29
| Tu carrito es:
|    - 456 con 29 unidades
| Que más deseas hacer?
> bye
| Adiós fue un gusto atenderte!
```

El formato de entrada de operaciones al carrito es `<id de producto> <cantidad a sumar al carrito>`, usando espacio como delimitador. Una cantidad negativa resta del carrito.

## Estructura del proyecto

```
src/
  cart/        # dominio: logica de negocio del carrito (altas, bajas, cambios)
  tui/         # capa de interaccion: sesion, parser de input, mensajes de salida
  index.ts     # entry point
tests/
  unit/        # tests unitarios (TDD) - principalmente sobre src/cart
  bdd/         # tests de integracion estilo Given/When/Then - principalmente sobre src/tui
```

## Equipo

| Rol | Integrante |
|---|---|
| Miembro 1 — Infraestructura, setup y estandares | |
| Miembro 2 — Logica de dominio del carrito | |
| Miembro 3 — Capa de interaccion / sesion TUI | |
| Miembro 4 — QA, cobertura y release | |

## Documentacion

- [`AGENTS.md`](./AGENTS.md) — guia para desarrolladores (humanos y herramientas agenticas).
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) — flujo de ramas, convenciones y checklist de PR.

## Licencia

Este proyecto esta licenciado bajo [MIT](./LICENSE).
