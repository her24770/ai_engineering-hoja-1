import { describe, expect, it } from 'vitest';
import { Cart } from '../../../src/cart/Cart';

// Placeholder de convencion TDD para el Miembro 2: reemplazar con los casos reales de alta/baja/cambio.
describe('Cart', () => {
  it('agrega un producto nuevo al carrito', () => {
    const cart = new Cart();

    cart.applyOperation('sku-123', 2);

    expect(cart.getItems()).toEqual([{ productId: 'sku-123', quantity: 2 }]);
    expect(cart.isEmpty()).toBe(false);
  });

  it('incrementa la cantidad de un producto existente', () => {
    const cart = new Cart();

    cart.applyOperation('sku-123', 2);
    cart.applyOperation('sku-123', 3);

    expect(cart.getItems()).toEqual([{ productId: 'sku-123', quantity: 5 }]);
  });
  it.todo('decrementa la cantidad y elimina el producto al llegar a 0');
  it.todo('lanza error al restar cantidad de un producto que no esta en el carrito');

  it('placeholder: se instancia sin errores', () => {
    const cart = new Cart();
    expect(cart).toBeInstanceOf(Cart);
  });
});
