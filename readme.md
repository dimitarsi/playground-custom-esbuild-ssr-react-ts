# Custom Server-Side rendering

Attempt at building a loadable component, the doesn't increase bundle size by 0.5kb each time it is used.

## TLDR

The purpose of this repository is to play around with esbuild and how easy it is to setup a custom server-side rendering.


## Custom resolvers and extensions

It uses esbuild params `--loader:.mtsx=ts --resolve-extensions=.mtsx,` to generate lazy ESM modules, while keeping
a simple interface.

Example:
```
// in App.tsx, include the component like this
import Component from "./DeferredComponent";
```

The Developer sees only - `./DeferredComponent.tsx`

The client code uses the lazy version -
```
// DeferredComponent.mtsx
import { loadable } from "./loadable";

export default loadable(import("./DeferredComponent.tsx"));
```

The server code uses the non-lazy version - 
```
// DeferredComponent.ntsx
module.exports = require("./DeferredComponent.tsx");
```