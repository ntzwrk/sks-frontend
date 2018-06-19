import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFluctuationComponent } from './key-fluctuation.component';

describe('KeyFluctuationComponent', () => {
  let component: KeyFluctuationComponent;
  let fixture: ComponentFixture<KeyFluctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFluctuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFluctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
