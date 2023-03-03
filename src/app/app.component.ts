import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private updates: SwUpdate,
  ) {
    this.updates.checkForUpdate().then(res => console.log('checkForUpdate', res));
  }
}
