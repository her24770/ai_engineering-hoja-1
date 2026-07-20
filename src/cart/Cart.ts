import type { CartItem } from './Cart.types';

// TODO(Miembro 2): implementar la logica de negocio (altas, bajas y cambios) segun el mock de la TUI.
export class Cart {
  private items = new Map<string, number>();

  applyOperation(_productId: string, _quantity: number): void {
    throw new Error('Not implemented');
  }

  getItems(): CartItem[] {
    throw new Error('Not implemented');
  }

  isEmpty(): boolean {
    throw new Error('Not implemented');
  }
}
