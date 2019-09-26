import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishFormPage } from './publish-form.page';

describe('PublishFormPage', () => {
  let component: PublishFormPage;
  let fixture: ComponentFixture<PublishFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
