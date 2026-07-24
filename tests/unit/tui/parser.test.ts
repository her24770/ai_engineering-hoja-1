import { describe, expect, it } from 'vitest';

import {farewell} from '../../../src/tui/messages';
import { isExitCommand, parseOperation } from '../../../src/tui/parser';

describe('Pruebas de unitarias para parser', () => {
  it('When el usuario ingresa una operacion valida, Then se interpreta correctamente', () => {
    expect(parseOperation('12345 5')).toEqual({
      productId: '12345',
      quantity: 5,
    });
  });

  it('When el formato de la operacion es invalido, Then se lanza un error', () => {
    expect(() => parseOperation('12345')).toThrow('Formato inválido.');
  });

  it('When la cantidad ingresada no es un entero, Then se lanza un error', () => {
    expect(() => parseOperation('12345 hola')).toThrow('Cantidad inválida.');
  });
  it('When el usuario escribe bye, Then la sesion termina con la despedida', () => {
    expect(isExitCommand('bye')).toBe(true);
    expect(isExitCommand('BYE')).toBe(true);
    expect(isExitCommand(' bye ')).toBe(true);
    expect(isExitCommand('12345 5')).toBe(false);

    expect(farewell()).toBe('Adiós fue un gusto atenderte!');
  });
});