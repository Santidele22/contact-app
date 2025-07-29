import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button>{{text}}</button>`,
  styleUrl: './button.component.css'

})
export class ButtonComponent {
  text = input.required<string>()

}
