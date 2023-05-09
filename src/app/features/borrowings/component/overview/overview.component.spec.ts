import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: BorrowingsOverviewComponent;
  let fixture: ComponentFixture<BorrowingsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
