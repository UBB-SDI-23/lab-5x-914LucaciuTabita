import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsUpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: BorrowingsUpdateComponent;
  let fixture: ComponentFixture<BorrowingsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
