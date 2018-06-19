import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsyncPeersComponent } from './mailsync-peers.component';

describe('MailsyncPeersComponent', () => {
  let component: MailsyncPeersComponent;
  let fixture: ComponentFixture<MailsyncPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsyncPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsyncPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
