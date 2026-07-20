# Contribuir a este proyecto

## Flujo de ramas (GitHub Flow)

1. Actualiza tu `main` local: `git checkout main && git pull origin main`.
2. Crea una rama nueva: `git checkout -b feature/<descripcion-corta>` (o `fix/`, `chore/` segun el tipo de cambio).
3. Trabaja con commits pequeños y frecuentes, en formato [Conventional Commits](https://www.conventionalcommits.org) (ej. `feat: agregar alta de producto al carrito`, `test: cubrir baja total de producto`).
4. Antes de abrir la PR, corre localmente:
   ```bash
   npm run lint
   npm run coverage
   ```
5. Push de la rama y abre un Pull Request hacia `main`. Puede abrirse como *draft* si aun no esta listo para revision.
6. Espera:
   - CI en verde (lint + test + cobertura).
   - Al menos **1 aprobacion de un integrante distinto al autor** (GitHub no permite que el autor apruebe su propia PR).
7. Al aprobar: squash merge a `main` (o el metodo que el equipo decida). Borra la rama despues del merge.

## No se permite

- Push directo a `main` (esta bloqueado por reglas de rama).
- Mergear una PR sin al menos 1 aprobacion externa.
- Mergear con CI en rojo.

## Checklist antes de pedir revision (Definition of Done)

- [ ] Tests nuevos o actualizados para el cambio (unitarios si es dominio, BDD si es TUI).
- [ ] `npm run lint` pasa sin errores.
- [ ] `npm run coverage` pasa y no baja el umbral de 80%.
- [ ] El cambio esta en una rama propia, no en `main`.
- [ ] Conversaciones de la PR resueltas antes de mergear.
