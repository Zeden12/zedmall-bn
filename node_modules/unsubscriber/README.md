# unsubscriber

[![npm version](https://img.shields.io/npm/v/unsubscriber?style=flat-square)](https://www.npmjs.com/package/unsubscriber)
[![bundle size](https://img.shields.io/bundlephobia/minzip/unsubscriber?style=flat-square)](https://bundlephobia.com/result?p=unsubscriber)
[![code coverage](https://img.shields.io/coveralls/github/re-js/unsubscriber?style=flat-square)](https://coveralls.io/github/re-js/unsubscriber)
[![typescript supported](https://img.shields.io/npm/types/typescript?style=flat-square)](index.d.ts)

How to easy collect unsubscribe functions from several sources.

```javascript
import { unsubscriber, collect, attach, run, scope, un } from "unsubscriber";

const unsubs = unsubscriber();

// Run code and collect unsubscribers
const app = collect(usubs, () => {
  un(() => {
    console.log('unsubscribe');
  });

  attach(scope(), () => {});
  return new App();
});

const detach = attach(usubs, () => {});

run(usubs);
```

Context dependent functions who available into the function body:

```javascript
const app = collect(usubs, () => {

  const detach = un(unsubscriber);

});
```

Enjoy your code!