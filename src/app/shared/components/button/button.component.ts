import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() iconClass?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() buttonClass: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
