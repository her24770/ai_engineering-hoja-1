# AGENTS.md

Guia para desarrolladores humanos y herramientas de agentic coding (Claude Code, Codex, OpenCode, etc.) que trabajen en este repositorio.

## Que es esto

POC de una TUI (Text User Interface) para el manejo del carrito de compras de un usuario anonimo, para Shop 502. Corre en terminal, sin GUI: pide el nombre del usuario, luego procesa operaciones `<id_producto> <cantidad>` sobre el carrito hasta que el usuario escribe `bye`.

## Stack

- Node.js 20+ / TypeScript (modulo CommonJS por compatibilidad con el empaquetado a binario)
- Vitest para tests + cobertura (`@vitest/coverage-v8`)
- ESLint (flat config) + Prettier
- `@yao-pkg/pkg` para generar el binario standalone

## Comandos

```bash
npm install          # instalar dependencias
npm run dev           # correr la TUI en modo desarrollo (tsx, sin compilar)
npm run lint           # ESLint
npm run test           # correr tests (vitest run)
npm run coverage       # correr tests con reporte de cobertura (umbral 80%, ver vitest.config.ts)
npm run build           # compilar TypeScript a dist/
npm run package         # build + empaquetar binarios (linux/macos/win) en dist-bin/
```

## Estructura

```
src/
  cart/        # dominio: logica de negocio del carrito (altas, bajas, cambios)
  tui/         # capa de interaccion: sesion, parser de input, mensajes de salida
  index.ts     # entry point
tests/
  unit/        # tests unitarios (TDD) - principalmente sobre src/cart
  bdd/         # tests de integracion estilo Given/When/Then - principalmente sobre src/tui
```

## Reglas de negocio del carrito

- Operacion valida: `<id_producto> <cantidad>`, separados por espacio.
- Cantidad positiva: si el producto no existe en el carrito, se agrega; si ya existe, se incrementa.
- Cantidad negativa: decrementa la cantidad existente. Si llega a 0 o menos, el producto se elimina del carrito.
- Restar cantidad de un producto que no esta en el carrito es un error (se informa al usuario, no se rompe la sesion).
- `bye` termina la sesion con un mensaje de despedida.
- Los mensajes de salida deben coincidir exactamente con el mock de UX entregado por el equipo de producto/UX.

## Flujo de trabajo (obligatorio)

- Estrategia de ramas: **GitHub Flow puro**. No existe rama `develop`.
- `main` esta protegida: nadie hace push directo, todo cambio entra por Pull Request.
- Toda PR requiere al menos **1 aprobacion de alguien distinto al autor** antes de mergear.
- Nombres de rama: `feature/<descripcion>`, `fix/<descripcion>`, `chore/<descripcion>`.
- Commits en formato [Conventional Commits](https://www.conventionalcommits.org).
- El CI (lint + test + cobertura) debe pasar en la PR y en el push a `main` antes de considerar el trabajo terminado.

## Metodologia de testing

- `src/cart` (dominio): **TDD**. Escribir el test antes o junto con la logica, cubrir alta, baja parcial, baja total y el caso de error.
- `src/tui` (interaccion): **BDD**. Los escenarios se basan directamente en las conversaciones del mock (`tests/bdd`).
- Cobertura minima exigida: **80%** global, forzada en `vitest.config.ts` y verificada en CI.

## Para agentes de coding

- No modifiques `main` directamente ni intentes saltarte la revision de PR.
- Antes de tocar `src/cart` o `src/tui`, revisa si el modulo tiene un `TODO(Miembro N)` indicando quien es el owner de esa pieza, para no pisar trabajo en curso de otro integrante.
- Corre `npm run lint` y `npm run coverage` antes de dar por terminado un cambio.
- No agregues dependencias nuevas sin necesidad clara; este es un POC con alcance acotado.
