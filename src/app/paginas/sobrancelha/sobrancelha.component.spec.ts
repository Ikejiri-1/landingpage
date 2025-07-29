import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrancelhaComponent } from './sobrancelha.component';

describe('SobrancelhaComponent', () => {
  let component: SobrancelhaComponent;
  let fixture: ComponentFixture<SobrancelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobrancelhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobrancelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
