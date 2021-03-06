import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wc2',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir: '../../src/assets/js/wc2/'
    }
  ]
};
