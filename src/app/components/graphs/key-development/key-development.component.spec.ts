import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDevelopmentComponent } from './key-development.component';

describe('KeyDevelopmentComponent', () => {
  let component: KeyDevelopmentComponent;
  let fixture: ComponentFixture<KeyDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
