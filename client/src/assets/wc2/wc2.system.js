System.register(['./core-b64a7007.system.js'], function () {
    'use strict';
    var patchBrowser, globals, bootstrapLazy;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                globals = module.g;
                bootstrapLazy = module.b;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globals();
                return bootstrapLazy([["wc-two.system", [[1, "wc-two", { "first": [1], "middle": [1], "last": [1] }]]]], options);
            });
        }
    };
});
