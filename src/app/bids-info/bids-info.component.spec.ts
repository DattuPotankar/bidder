import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsInfoComponent } from './bids-info.component';

describe('BidsInfoComponent', () => {
  let component: BidsInfoComponent;
  let fixture: ComponentFixture<BidsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
