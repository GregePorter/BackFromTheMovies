import {Component} from '@angular/core';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  directives: [HeaderComponent, TitleComponent, FooterComponent]
})
export class MainComponent {}
