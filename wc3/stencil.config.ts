import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wc3',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
