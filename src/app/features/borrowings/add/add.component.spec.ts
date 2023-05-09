import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: BorrowingsAddComponent;
  let fixture: ComponentFixture<BorrowingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
