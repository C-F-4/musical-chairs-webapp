import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomViewItemComponent } from './room-view-item.component';

describe('RoomViewItemComponent', () => {
  let component: RoomViewItemComponent;
  let fixture: ComponentFixture<RoomViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
