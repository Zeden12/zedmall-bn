import {
  unsubscriber,
  collect,
  scope,
  attach,
  run,
  un,
  Unsubscriber
} from 'unsubscriber';

test('it works', () => {
  let steps = '';
  let b_detach: () => void;
  let x_detach: () => void;
  let scope_handler: Unsubscriber;

  const unsubs = unsubscriber();

  // Run code and collect "un" calls.
  const app = collect(unsubs, () => {
    attach(() => steps += 'A');
    b_detach = attach(() => steps += 'B');
    attach(() => steps += 'C');
    scope_handler = scope()!;
    x_detach = un(() => steps += 'X');
    un(() => steps += 'Z');
    return 'APP'
  });
  expect(app).toBe('APP');

  attach(unsubs, () => steps += 'D');
  const detach = attach(unsubs, () => steps += 'E');
  attach(unsubs, () => steps += 'F');
  
  attach(scope_handler!, () => steps += 'G');

  detach();
  b_detach!();
  x_detach!();

  attach(() => steps += 'H');
  un(() => steps += 'Y')();

  expect(steps).toBe('');
  run(unsubs);
  expect(steps).toBe('ACZDFG');
  expect(unsubs.size).toBe(0);
})
