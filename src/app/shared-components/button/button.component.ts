import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' | 'cancel' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'blue' = 'primary';

  mapColors = {
    success: {
      'bg-success': true,
      'hover:bg-lightsuccess': true,
      'text-white': true,
    },
    primary: {
      'bg-yellow': true,
      'hover:bg-primary': true,
      'text-white': true,
    },
    blue: {
      'bg-blue': true,
      'hover:bg-mediumblue': true,
      'text-white': true,
    },
    danger: {
      'bg-danger': true,
      'hover:bg-lightdanger': true,
      'text-white': true,
    },
    light: {
      'bg-bglight': true,
      'hover:bg-lightgray': true,
      'text-white': true,
    },
  };

  get colors() {
    const colors = this.mapColors[this.color];
    if(colors) {
      return colors;
    }
    return{};
  }
}
