import { Environment } from 'src/app/_shared/models';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment: Environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAibl024Yd6odwOhjT2SjTpfzzEQOQSz5I',
    authDomain: 'dev-moots-app.firebaseapp.com',
    databaseURL: 'https://dev-moots-app.firebaseio.com',
    projectId: 'dev-moots-app',
    storageBucket: 'dev-deetz-app.appspot.com',
    messagingSenderId: '800626978014',
    appId: '1:800626978014:web:a617ea30e6262e0106e64f',
    measurementId: 'G-3YB148BX72'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
