import type { CartItem } from './Cart.types';

// TODO(Miembro 2): implementar la logica de negocio (altas, bajas y cambios) segun el mock de la TUI.
export class Cart {
  private items = new Map<string, number>();

  applyOperation(productId: string, quantity: number): void {
    const currentQuantity = this.items.get(productId) ?? 0;

    this.items.set(productId, currentQuantity + quantity);
  }

  getItems(): CartItem[] {
    return Array.from(this.items.entries()).map(([productId, quantity]) => ({
      productId,
      quantity,
    }));
  }

  isEmpty(): boolean {
    return this.items.size === 0;
  }
}
