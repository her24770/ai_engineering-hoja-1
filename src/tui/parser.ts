export interface ParsedOperation {
  productId: string;
  quantity: number;
}

export function parseOperation(input: string): ParsedOperation {
  const parts = input.trim().split(/\s+/);

  if (parts.length !== 2) {
    throw new Error('Formato inválido.');
  }

  const [productId, quantityText] = parts;
  const quantity = Number(quantityText);

  if (Number.isNaN(quantity) || !Number.isInteger(quantity)) {
    throw new Error('Cantidad inválida.');
  }

  return {
    productId,
    quantity,
  };
}

export function isExitCommand(input: string): boolean {
  return input.trim().toLowerCase() === 'bye';
}
