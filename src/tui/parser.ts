export interface ParsedOperation {
  productId: string;
  quantity: number;
}

// TODO(Miembro 3): parsear "<id_producto> <cantidad>" y manejar inputs invalidos.
export function parseOperation(_input: string): ParsedOperation {
  throw new Error('Not implemented');
}

export function isExitCommand(_input: string): boolean {
  throw new Error('Not implemented');
}
