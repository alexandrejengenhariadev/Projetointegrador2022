import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDoacaoComponent } from './nova-doacao.component';

describe('NovaDoacaoComponent', () => {
  let component: NovaDoacaoComponent;
  let fixture: ComponentFixture<NovaDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaDoacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
