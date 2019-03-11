import {Config} from 'protractor';

export let config: Config = {
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['testspec.js'],
  seleniumAddress: 'http://10.114.196.179:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};