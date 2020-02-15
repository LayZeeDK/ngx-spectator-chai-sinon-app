import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  template: `
    <button [ngClass]="className">
      {{title}}
    </button>
  `,
})
export class ButtonComponent {
  @Input()
  className = 'success';
  @Input()
  title = 'Button';
}
