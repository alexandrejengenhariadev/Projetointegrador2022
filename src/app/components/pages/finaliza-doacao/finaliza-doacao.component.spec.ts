import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaDoacaoComponent } from './finaliza-doacao.component';

describe('FinalizaDoacaoComponent', () => {
  let component: FinalizaDoacaoComponent;
  let fixture: ComponentFixture<FinalizaDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizaDoacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
