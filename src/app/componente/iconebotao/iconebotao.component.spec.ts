import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconebotaoComponent } from './iconebotao.component';

describe('IconebotaoComponent', () => {
  let component: IconebotaoComponent;
  let fixture: ComponentFixture<IconebotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconebotaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconebotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
