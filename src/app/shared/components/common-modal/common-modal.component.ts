import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-common-modal',
  standalone: true,
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
  imports: [CommonModule, ButtonComponent],
})
export class CommonModalComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  close(): void {
    this.onClose.emit();
  }

  save(): void {
    this.onSave.emit();
  }
}
