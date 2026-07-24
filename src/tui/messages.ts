import type { CartItem } from '../cart/Cart.types';

export function greet(name: string): string {
  return `Hola ${name}! Que deseas modificar en tu carrito?`;
}

export function cartSummary(items: CartItem[]): string {
  if (items.length === 0) {
    return 'Tu carrito está vacío.';
  }

  let result = 'Tu carrito es:\n';

  for (const item of items) {
    result += `  - ${item.productId} con ${item.quantity} unidades\n`;
  }

  return result.trimEnd();
}

export function emptyCartMessage(): string {
  return 'Tu carrito está vacío, que más deseas hacer?';
}

export function productNotInCartError(productId: string): string {
  return `Oops parece que no tienes el producto ${productId} agregado a tu carrito. Que más deseas hacer?`;
}

export function farewell(): string {
  return 'Adiós fue un gusto atenderte!';
}
