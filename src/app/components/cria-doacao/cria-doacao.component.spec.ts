import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaDoacaoComponent } from './cria-doacao.component';

describe('CriaDoacaoComponent', () => {
  let component: CriaDoacaoComponent;
  let fixture: ComponentFixture<CriaDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaDoacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
