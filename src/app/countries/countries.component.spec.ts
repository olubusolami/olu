import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { countriescomponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: countriescomponent;
  let fixture: ComponentFixture<countriescomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ countriescomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(countriescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
