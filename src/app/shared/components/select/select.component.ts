import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SelectComponent {
  @Input() options: { value: string | number, label: string }[] = [];
  @Input() selectedValue: string | number = '';
  @Input() name: string = '';
  @Output() selectedValueChange = new EventEmitter<string | number>();

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    this.selectedValueChange.emit(this.selectedValue);
  }
}
