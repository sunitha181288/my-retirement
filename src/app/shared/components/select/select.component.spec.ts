import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';

import { By } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;

  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent, CommonModule, FormsModule], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);

    component = fixture.componentInstance;
  });

  it('should create the select component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct options', () => {
    component.options = [
      { value: '1', label: 'Option 1' },

      { value: '2', label: 'Option 2' },
    ];

    fixture.detectChanges();

    const selectElement = fixture.debugElement.query(By.css('select'));

    const optionElements = selectElement.nativeElement.options;

    expect(optionElements.length).toBe(2);

    expect(optionElements[0].text).toBe('Option 1');

    expect(optionElements[1].text).toBe('Option 2');
  });

  it('should emit selectedValueChange on selection change', () => {
    spyOn(component.selectedValueChange, 'emit'); // Spy on the selectedValueChange event emitter

    component.options = [
      { value: '1', label: 'Option 1' },

      { value: '2', label: 'Option 2' },
    ];

    fixture.detectChanges();

    const selectElement = fixture.debugElement.query(By.css('select'));

    selectElement.nativeElement.value = '2'; // Change the selected value

    selectElement.nativeElement.dispatchEvent(new Event('change'));

    expect(component.selectedValueChange.emit).toHaveBeenCalledWith('2'); // Check if selectedValueChange was emitted
  });

  it('should update selectedValue when onChange is called', () => {
    component.options = [
      { value: '1', label: 'Option 1' },

      { value: '2', label: 'Option 2' },
    ];

    fixture.detectChanges();
    const selectElement = fixture.debugElement.query(By.css('select'));

    selectElement.nativeElement.value = '2';

    const changeEvent = new Event('change', { bubbles: true });

    selectElement.nativeElement.dispatchEvent(changeEvent);

    component.onChange(changeEvent); // Call onChange manually

    expect(component.selectedValue).toBe('2'); // Check selectedValue is updated
  });
});
