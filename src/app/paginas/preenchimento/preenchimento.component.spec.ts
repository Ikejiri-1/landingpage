import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreenchimentoComponent } from './preenchimento.component';

describe('PreenchimentoComponent', () => {
  let component: PreenchimentoComponent;
  let fixture: ComponentFixture<PreenchimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreenchimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreenchimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
