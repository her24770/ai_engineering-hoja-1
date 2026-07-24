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
  it('maneja múltiples productos en el carrito', () => {
    const cart = new Cart();

    cart.applyOperation('sku-123', 2);
    cart.applyOperation('sku-456', 5);

    expect(cart.getItems()).toEqual([
      { productId: 'sku-123', quantity: 2 },
      { productId: 'sku-456', quantity: 5 },
    ]);
  });
  it('decrementa la cantidad de un producto sin eliminarlo', () => {
    const cart = new Cart();

    cart.applyOperation('sku-123', 5);
    cart.applyOperation('sku-123', -2);

    expect(cart.getItems()).toEqual([
      { productId: 'sku-123', quantity: 3 },
    ]);
    expect(cart.isEmpty()).toBe(false);
  });
  it('decrementa la cantidad y elimina el producto al llegar a 0', () =>{
    const cart = new Cart();
    cart.applyOperation('sku-123', 5);
    cart.applyOperation('sku-123', -5);

    expect(cart.isEmpty()).toBe(true);
    expect(cart.getItems()).toEqual([]);
  });
  it('lanza error al restar cantidad de un producto que no esta en el carrito', () => {
    const cart = new Cart();

    expect(() => cart.applyOperation('sku-123', -1))
      .toThrow('El producto sku-123 no se encontró en el carrito.');
  });
  it('lanza error cuando la cantidad resultante es negativa', () => {
    const cart = new Cart();

    cart.applyOperation('sku-123', 2);

    expect(() => cart.applyOperation('sku-123', -3))
      .toThrow();
  });

  it('placeholder: se instancia sin errores', () => {
    const cart = new Cart();
    expect(cart).toBeInstanceOf(Cart);
  });
});
