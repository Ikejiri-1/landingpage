import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioestimuladorComponent } from './bioestimulador.component';

describe('BioestimuladorComponent', () => {
  let component: BioestimuladorComponent;
  let fixture: ComponentFixture<BioestimuladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioestimuladorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioestimuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
