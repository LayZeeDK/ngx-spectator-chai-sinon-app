import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-button [title]="title"></app-button>
  `,
})
export class AppComponent {
  title = 'ngx-spectator-chai-sinon-app';
}
