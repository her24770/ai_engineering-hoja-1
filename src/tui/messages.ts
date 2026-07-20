import type { CartItem } from '../cart/Cart.types';

// TODO(Miembro 3): centralizar aqui los textos exactos del mock de la TUI.
export function greet(_name: string): string {
  throw new Error('Not implemented');
}

export function cartSummary(_items: CartItem[]): string {
  throw new Error('Not implemented');
}

export function emptyCartMessage(): string {
  throw new Error('Not implemented');
}

export function productNotInCartError(_productId: string): string {
  throw new Error('Not implemented');
}

export function farewell(): string {
  throw new Error('Not implemented');
}
