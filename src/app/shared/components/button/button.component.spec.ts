import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

import { By } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

describe('ButtonComponent', () => {
  let component: ButtonComponent;

  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent, CommonModule], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);

    component = fixture.componentInstance;
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    component.label = 'Click Me';

    fixture.detectChanges(); // Trigger change detection

    const buttonElement = fixture.debugElement.query(By.css('button'));

    expect(buttonElement.nativeElement.textContent).toContain('Click Me');
  });

  it('should have the correct button type', () => {
    component.type = 'submit';

    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));

    fixture.debugElement.query(By.css('button'));

    expect(buttonElement.nativeElement.type).toBe('submit');
  });

  it('should apply the button class', () => {
    component.buttonClass = 'custom-class';

    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));

    expect(buttonElement.nativeElement.classList).toContain('custom-class');
  });

  it('should emit clicked event when button is clicked', () => {
    spyOn(component.clicked, 'emit'); // Spy on the clicked event emitter

    const buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.nativeElement.click();

    expect(component.clicked.emit).toHaveBeenCalled(); // Check if clicked event was emitted
  });

  it('should apply the icon class if provided', () => {
    component.iconClass = 'icon-class';

    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.icon-class'));

    expect(iconElement).toBeTruthy(); // Ensure the icon class is added
  });
});
