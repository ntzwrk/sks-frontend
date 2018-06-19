import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipPeersComponent } from './gossip-peers.component';

describe('GossipPeersComponent', () => {
  let component: GossipPeersComponent;
  let fixture: ComponentFixture<GossipPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
