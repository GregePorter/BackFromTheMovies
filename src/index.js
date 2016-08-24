import 'reflect-metadata';
import 'zone.js';

import './index.less';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, RootComponent} from './routes';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(RootComponent, [
  provideRouter(routes)
]);
