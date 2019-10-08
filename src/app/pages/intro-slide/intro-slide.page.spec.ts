import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSlidePage } from './intro-slide.page';

describe('IntroSlidePage', () => {
  let component: IntroSlidePage;
  let fixture: ComponentFixture<IntroSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
