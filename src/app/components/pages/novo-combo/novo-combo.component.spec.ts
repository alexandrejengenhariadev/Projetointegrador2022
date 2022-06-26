import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComboComponent } from './novo-combo.component';

describe('NovoComboComponent', () => {
  let component: NovoComboComponent;
  let fixture: ComponentFixture<NovoComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
