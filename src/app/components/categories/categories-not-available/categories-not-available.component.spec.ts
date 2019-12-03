import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNotAvailableComponent } from './categories-not-available.component';

describe('CategoriesNotAvailableComponent', () => {
  let component: CategoriesNotAvailableComponent;
  let fixture: ComponentFixture<CategoriesNotAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesNotAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
