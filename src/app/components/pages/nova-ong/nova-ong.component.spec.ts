import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaOngComponent } from './nova-ong.component';

describe('NovaOngComponent', () => {
  let component: NovaOngComponent;
  let fixture: ComponentFixture<NovaOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaOngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
