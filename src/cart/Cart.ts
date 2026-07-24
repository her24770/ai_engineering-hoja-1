import type { CartItem } from './Cart.types';

// TODO(Miembro 2): implementar la logica de negocio (altas, bajas y cambios) segun el mock de la TUI.
export class Cart {
  private items = new Map<string, number>();

  applyOperation(productId: string, quantity: number): void {
    const currentQuantity = this.items.get(productId);

    //Si el producto no existe y se intenta quitar, lanza error
    if(currentQuantity === undefined && quantity <=0) {
      throw new Error(`El producto ${productId} no se encontró en el carrito.`);
    }

    const newQuantity = (currentQuantity ?? 0) + quantity;

    //Si el resultado es negativo, lanza error
    if(newQuantity < 0){
      throw new Error(`La cantidad del producto ${productId} no puede ser menor a 0`)
    }

    //Si la cantidad es 0, eliminar el producto
    if(newQuantity === 0){
      this.items.delete(productId);
      return;
    }

    //Actualizar o agregar el producto
    this.items.set(productId, newQuantity);
    return;
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
