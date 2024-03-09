import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseitemComponent } from './houseitem.component';

describe('HouseitemComponent', () => {
  let component: HouseitemComponent;
  let fixture: ComponentFixture<HouseitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
