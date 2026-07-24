import { describe, expect, it } from 'vitest';

import {
  cartSummary,
  emptyCartMessage,
  farewell,
  greet,
  productNotInCartError,
} from '../../../src/tui/messages';
import { isExitCommand } from '../../../src/tui/parser';

describe('Pruebas de unitarias para mensajes', () => {
      it('When el usuario ingresa su nombre, Then se lo saluda por su nombre', () => {
    expect(greet('Rodrigo Custodio')).toBe(
      'Hola Rodrigo Custodio! Que deseas modificar en tu carrito?',
    );
  });

  it('When el usuario agrega un producto nuevo, Then el carrito lo muestra con su cantidad', () => {
    expect(
      cartSummary([
        {
          productId: '12345',
          quantity: 5,
        },
      ]),
    ).toBe(`Tu carrito es:
  - 12345 con 5 unidades`);
  });

  it('When el usuario resta toda la cantidad de un producto, Then el carrito queda vacio', () => {
    expect(emptyCartMessage()).toBe(
      'Tu carrito está vacío, que más deseas hacer?',
    );
  });

  it('When el usuario resta cantidad de un producto inexistente, Then se muestra el error', () => {
    expect(productNotInCartError('12345')).toBe(
      'Oops parece que no tienes el producto 12345 agregado a tu carrito. Que más deseas hacer?',
    );
  });

  it('When el usuario escribe bye, Then la sesion termina con la despedida', () => {
    expect(isExitCommand('bye')).toBe(true);
    expect(farewell()).toBe('Adiós fue un gusto atenderte!');
  });

  it('When el carrito está vacío, Then se muestra el mensaje', () => {
    expect(cartSummary([])).toBe('Tu carrito está vacío.');
  })
});