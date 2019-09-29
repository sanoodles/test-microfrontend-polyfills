import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-f4dc7a8f.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["wc-two",[[1,"wc-two",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
