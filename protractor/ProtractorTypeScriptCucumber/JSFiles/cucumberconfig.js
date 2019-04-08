"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    capabilities: {
        browserName: 'chrome'
    },
    seleniumAddress: 'http://10.114.196.179:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        require: [
            './stepDefinations/*.js'
        ]
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBQzFCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUNuQyxZQUFZLEVBQUM7UUFDVCxPQUFPLEVBQUU7WUFDTCx3QkFBd0I7U0FDM0I7S0FDSjtJQUVELDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyJ9