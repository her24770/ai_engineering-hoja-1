import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import { Cart } from '../cart/Cart';
import { parseOperation, isExitCommand } from './parser';
import {
  greet,
  cartSummary,
  emptyCartMessage,
  farewell,
  productNotInCartError,
} from './messages';

export async function runSession(): Promise<void> {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const cart = new Cart();

  const name = await rl.question('Por favor ingrese su nombre.\n> ');

  console.log(greet(name));

  while (true) {
    const input = await rl.question('> ');

    if (isExitCommand(input)) {
      console.log(farewell());
      break;
    }
    let operation = { productId: '', quantity: 0 };
    try {
      operation = parseOperation(input);

      cart.applyOperation(operation.productId, operation.quantity);

      const items = cart.getItems();

      if (cart.isEmpty()) {
        console.log(emptyCartMessage());
      } else {
        console.log(cartSummary(items));
        console.log('Que más deseas hacer?');
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('no se encontró en el carrito')) {
          console.log(productNotInCartError(operation.productId));
        } else {
          console.log(error.message);
        }
      }
    }
  }

  rl.close();
}