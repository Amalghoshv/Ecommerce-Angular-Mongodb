import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductviewComponent } from './allproductview.component';

describe('AllproductviewComponent', () => {
  let component: AllproductviewComponent;
  let fixture: ComponentFixture<AllproductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllproductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
