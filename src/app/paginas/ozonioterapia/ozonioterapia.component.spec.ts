import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzonioterapiaComponent } from './ozonioterapia.component';

describe('OzonioterapiaComponent', () => {
  let component: OzonioterapiaComponent;
  let fixture: ComponentFixture<OzonioterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OzonioterapiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OzonioterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
