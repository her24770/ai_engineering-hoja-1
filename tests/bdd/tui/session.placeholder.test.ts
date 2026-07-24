import { beforeEach, describe, expect, it, vi } from 'vitest';

const question = vi.fn();
const close = vi.fn();

vi.mock('node:readline/promises', () => ({
  createInterface: vi.fn(() => ({
    question,
    close,
  })),
}));

import { runSession } from '../../../src/tui/session';

describe('Given una sesión de carrito', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('When el usuario agrega un producto y luego escribe bye, Then se muestra el saludo, el carrito y la despedida', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345 5')
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 5 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('When el usuario resta cantidad de un producto inexistente, Then se muestra el error y finaliza la sesion', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345 -5')
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Oops parece que no tienes el producto 12345 agregado a tu carrito. Que más deseas hacer?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('When el usuario agrega un producto, luego resta una cantidad menor que la cantidad inicial, Then el producto se muestra con la cantidad restante y la sesion continua', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345 5')
      .mockResolvedValueOnce('12345 -3')
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 5 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 2 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('When el usuario agrega un producto, luego otro producto y resta cantidad de uno de los productos, Then se muestra el carrito actualizado y la sesion continua', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345 5')
      .mockResolvedValueOnce('67890 10')
      .mockResolvedValueOnce('12345 -3')
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 5 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 5 unidades\n  - 67890 con 10 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 2 unidades\n  - 67890 con 10 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('When el usuario elimina completamente un producto, Then el carrito queda vacío', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345 5')
      .mockResolvedValueOnce('12345 -5')
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito es:\n  - 12345 con 5 unidades',
    );

    expect(logSpy).toHaveBeenCalledWith('Que más deseas hacer?');

    expect(logSpy).toHaveBeenCalledWith(
      'Tu carrito está vacío, que más deseas hacer?',
    );

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('When el usuario ingresa una operación con formato inválido, Then se muestra el mensaje de error y la sesión continúa', async () => {
    question
      .mockResolvedValueOnce('Rodrigo')
      .mockResolvedValueOnce('12345') // formato inválido
      .mockResolvedValueOnce('bye');

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await runSession();

    expect(logSpy).toHaveBeenCalledWith(
      'Hola Rodrigo! Que deseas modificar en tu carrito?',
    );

    expect(logSpy).toHaveBeenCalledWith('Formato inválido.');

    expect(logSpy).toHaveBeenCalledWith(
      'Adiós fue un gusto atenderte!',
    );

    expect(close).toHaveBeenCalled();

    logSpy.mockRestore();
  });
});