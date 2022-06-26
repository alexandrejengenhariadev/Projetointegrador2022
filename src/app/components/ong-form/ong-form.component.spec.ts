import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngFormComponent } from './ong-form.component';

describe('OngFormComponent', () => {
  let component: OngFormComponent;
  let fixture: ComponentFixture<OngFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
