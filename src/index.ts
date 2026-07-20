import { runSession } from './tui/session';

runSession().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
