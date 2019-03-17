import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScannerPage } from './detail-scanner.page';

describe('DetailScannerPage', () => {
  let component: DetailScannerPage;
  let fixture: ComponentFixture<DetailScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
