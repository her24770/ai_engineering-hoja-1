import { describe, expect, it } from 'vitest';
import { Cart } from '../../../src/cart/Cart';

// Placeholder de convencion TDD para el Miembro 2: reemplazar con los casos reales de alta/baja/cambio.
describe('Cart', () => {
  it.todo('agrega un producto nuevo al carrito');
  it.todo('incrementa la cantidad de un producto existente');
  it.todo('decrementa la cantidad y elimina el producto al llegar a 0');
  it.todo('lanza error al restar cantidad de un producto que no esta en el carrito');

  it('placeholder: se instancia sin errores', () => {
    const cart = new Cart();
    expect(cart).toBeInstanceOf(Cart);
  });
});
