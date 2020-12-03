import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{}"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {

  @Input()
  label = 'Button';

  @Input()
  mode: 'primary' | 'secondary' | 'irenebutton';

  // @Input()
  // backgroundColor?: string;
  // el background debería estar solo por css porque sino no se puede cambiar en el interface del controls

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    // const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    // console.log(this.mode, this.size)

    return ['storybook-button', `storybook-button--${this.size}`, `storybook-button--${this.mode}`];
  }
}
