import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: BorrowingsDetailsComponent;
  let fixture: ComponentFixture<BorrowingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
