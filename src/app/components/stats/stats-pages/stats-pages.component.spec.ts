import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPagesComponent } from './stats-pages.component';

describe('StatsPagesComponent', () => {
  let component: StatsPagesComponent;
  let fixture: ComponentFixture<StatsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
